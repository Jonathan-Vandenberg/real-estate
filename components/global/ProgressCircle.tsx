import classNames from "classnames";

export default function TaskProgress({ completedTasks }) {
  const tasks = [
    { name: "Task 1", color: "[rgb(34,34,234)]" },
    { name: "Task 2", color: "[rgb(34,134,34)]" },
    { name: "Task 3", color: "[rgb(234,34,34)]" },
    { name: "Task 4", color: "[rgb(34,134,34)]" },
    { name: "Task 5", color: "[rgb(34,34,234)]" },
    { name: "Task 6", color: "[rgb(34,134,34)]" },
    { name: "Task 7", color: "[rgb(234,34,34)]" },
    { name: "Task 8", color: "[rgb(34,134,34)]" },
    { name: "Task 9", color: "[rgb(234,34,34)]" },
    { name: "Task 10", color: "[rgb(34,134,34)]" },
  ];

  return (
    <div className="relative rounded-full h-[30rem] w-[30rem]">
      <div className="absolute inset-0 flex items-center justify-center">
        {tasks.map((task, index) => {
          const taskClasses = classNames(
            "absolute",
            "inset-0",
            "h-full",
            "w-full",
            `bg-${task.color}`,
            { "opacity-50": !completedTasks.includes(task.name) }
          );

          return <div key={index} className={taskClasses} />;
        })}
      </div>
      <div className="relative rounded-full h-[30rem] w-[30rem]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-full w-full bg-white" />
        </div>
      </div>
    </div>
  );
}
