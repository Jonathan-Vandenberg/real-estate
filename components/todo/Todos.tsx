import { useEffect, useState } from "react";
import {
  Todo,
  useCreateOrUpdateTodoMutation,
  Offer_In_Categories,
  useDeleteTodoMutation,
} from "../../types";
import Calender from "../global/Calender";
import Switch from "../global/Switch";
import { Button } from "../global/Button";
import moment from "moment";
import Delete from "../svgs/Delete";
import { String } from "aws-sdk/clients/acm";

interface IProps {
  todo?: Todo | null | undefined;
  offerInCategory: Offer_In_Categories;
  offerInId: String;
  create?: "create" | "update";
}

export default function Todos({
  todo,
  offerInCategory,
  offerInId,
  create,
}: IProps) {
  const [id, setId] = useState(todo?.id || "");
  const [newId, setNewId] = useState("");
  const [task, setTask] = useState(todo?.task || "");
  const [completed, setCompleted] = useState(todo?.completed || false);
  const [deadline, setDeadline] = useState<Date | null>(null);
  const [todoOfferInCategory, setTodoOfferInCategory] = useState(
    offerInCategory || ""
  );

  useEffect(() => {
    var mongoObjectId = function () {
      var timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
      return (
        timestamp +
        "xxxxxxxxxxxxxxxx"
          .replace(/[x]/g, function () {
            return ((Math.random() * 16) | 0).toString(16);
          })
          .toLowerCase()
      );
    };
    setNewId(mongoObjectId());
  }, []);

  useEffect(() => {
    function datify() {
      const deadline = moment(todo?.deadline).toDate();
      setDeadline(deadline);
    }
    datify();
  }, []);

  const [deleteTodo, { loading: loadingDelete, error: errorDelete }] =
    useDeleteTodoMutation();

  const [createOrUpdateTodo, { loading, error }] =
    useCreateOrUpdateTodoMutation();

  const handleCreateOrUpdateTodo = () => {
    createOrUpdateTodo({
      variables: {
        id: create === "create" ? newId : id,
        input: {
          offerInCategory: todoOfferInCategory,
          offerInId: offerInId,
          task: task,
          completed: completed,
          deadline: deadline,
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
    <div className="rounded-xl p-2 md:p-5 bg-[rgb(240,239,239)] drop-shadow-md">
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
      <div className="w-full mx-auto flex items-center justify-center space-x-3 pb-3 pt-6">
        <Button variant="secondary" onClick={handleDeleteTodo}>
          <div className="space-x-1 flex items-center justify-center">
            <div>{loadingDelete ? "Removing Todo" : "Delete"}</div>
            <Delete className="w-5 h-5" />
          </div>
        </Button>
        <Button
          className="text-white"
          variant="primary"
          onClick={handleCreateOrUpdateTodo}
        >
          {loading ? "Saving" : "Save"}
        </Button>
      </div>
    </div>
  );
}
