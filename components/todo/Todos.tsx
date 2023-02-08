import { useEffect, useState } from "react";
import {
  Todo,
  useUpdateTodoMutation,
  Offer_In_Categories,
  useDeleteTodoMutation,
} from "../../types";
import Calender from "../global/Calender";
import Switch from "../global/Switch";
import { Button } from "../global/Button";
import moment from "moment";
import Delete from "../svgs/Delete";

interface IProps {
  todo: Todo | null | undefined;
  offerInCategory: Offer_In_Categories;
}

export default function Todos({ todo, offerInCategory }: IProps) {
  const [task, setTask] = useState(todo?.task);
  const [completed, setCompleted] = useState(todo?.completed);
  const [deadline, setDeadline] = useState<Date | null>(null);

  useEffect(() => {
    function datify() {
      const deadline = moment(todo?.deadline).toDate();
      setDeadline(deadline);
    }
    datify();
  }, []);

  const [addNewTodo, { loading, error }] = useUpdateTodoMutation();
  const [deleteTodo, { loading: loadingDelete, error: errorDelete }] =
    useDeleteTodoMutation();

  const handleEditTodo = () => {
    addNewTodo({
      variables: {
        id: todo!.id,
        input: {
          task: task,
          completed: completed,
          deadline: deadline,
          offerInId: todo!.offerInId,
          offerInCategory: offerInCategory,
        },
      },
    });
  };

  const handleDeleteTodo = () => {
    deleteTodo({
      variables: {
        id: todo!.id,
      },
    });
  };

  if (error) return <p>Oops, something went wrong...</p>;

  return (
    <div className="rounded-xl p-2 md:p-5 bg-[rgb(247,247,247)] drop-shadow-md">
      <div>
        <label className="justify-center pt-4 text-md pb-4 flex flex-row-reverse items-center">
          <input
            type="checkbox"
            checked={completed as boolean}
            onChange={(e) => setCompleted(e.target.checked)}
            className="hidden"
          />
          <label className="ml-4 text-md font-bold">Mark as Complete</label>
          <Switch
            switchOn={completed}
            backGround="bg-gray"
            checked={completed as boolean}
            radioMode={false}
          />
        </label>
        <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md ">
          <textarea
            id="tsk"
            rows={5}
            value={task as string}
            placeholder="Todo..."
            onChange={(e) => setTask(e.target.value)}
            className="p-3 rounded-xl w-full  resize-none"
          />
        </div>
        <div className="flex items-start space-y-1 justify-center flex-col py-4 text-md">
          <label className="text-black font-bold">Deadline</label>
          <Calender
            onChange={(date: Date) => setDeadline(new Date(date))}
            selected={deadline || null}
            className="bg-white"
          />
        </div>
      </div>
      <div className="w-full mx-auto flex items-center justify-evenly md:justify-center md:space-x-3 pb-3 pt-6">
        <Button variant="secondary" onClick={handleDeleteTodo}>
          <div className="space-x-1 flex items-center justify-center">
            <div>{loadingDelete ? "Removing Todo" : "Delete"}</div>
            <Delete className="w-5 h-5" />
          </div>
        </Button>
        <Button
          className="text-white"
          variant="primary"
          onClick={handleEditTodo}
        >
          {loading ? "Saving" : "Save"}
        </Button>
      </div>
    </div>
  );
}
