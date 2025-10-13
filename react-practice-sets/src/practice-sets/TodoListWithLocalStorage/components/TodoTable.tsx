import { useState } from "react";
import { TASK_STATUS, type TaskStatusType } from "../constant";
import type { TableItemType } from "../types";
import "./styles.css";

export const TodoTable = ({
  tableItems,
  updateTaskStatus,
  deleteTask,
}: {
  tableItems: TableItemType[];
  updateTaskStatus: (index: number) => void;
  deleteTask: (index: number) => void;
}) => {
  const [filter, setFilter] = useState<TaskStatusType | "ALL">("ALL");

  const updateFilter = (filter:TaskStatusType|"ALL") => {
    setFilter(filter);
  }


  return (
    <table className="todo-table">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Task</th>
          <th>
            <select value={filter} onChange={(e) => updateFilter(e.target.value as TaskStatusType)}>
              <option value="ALL">All</option>
              {Object.keys(TASK_STATUS).map((ele) => {
                return (
                  <option value={TASK_STATUS[ele as TaskStatusType]}>
                    {TASK_STATUS[ele as TaskStatusType]}
                  </option>
                );
              })}
            </select>
          </th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tableItems.map((ele, index) => {
          if(filter !== "ALL" && filter !== ele.status){
            return '';
          }

          return (
            <tr>
              <td>{index + 1}</td>
              <td>{ele.task}</td>
              <td>
                <input
                  type="checkbox"
                  checked={ele.status === TASK_STATUS.COMPLETED}
                  onClick={() => updateTaskStatus(index)}
                />
              </td>
              <td>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
