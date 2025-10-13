import { useState } from "react";
import type { TableItemType } from "../types";
import { TASK_STATUS } from "../constant";

export const TodoAddTask = ({
  addNewTask,
}: {
  addNewTask: (task: TableItemType) => void;
}) => {
  const [data, setData] = useState<string>("");

  const handleAddTaskClick = () => {
    addNewTask({
      task: data,
      status: TASK_STATUS.PENDING,
    });
    setData('');
  };

  return (
    <div className="add-task-row">
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button
        onClick={handleAddTaskClick}
        disabled={data === ""}
        className={data === "" ? "disabled-btn" : ""}
      >
        Add Task
      </button>
    </div>
  );
};
