import { useEffect, useState } from "react";
import { TodoTable } from "./components/TodoTable";
import { TASK_STATUS } from "./constant";
import type { TableItemType } from "./types";
import { TodoAddTask } from "./components/TodoAddTask";
import { getLocalStorageData, setLocalStorageData } from "./utils";

const TodoListWithLocalStorage = () => {
  const [tableItems, setTableItems] = useState<TableItemType[]>([]);

  useEffect(() => {
    const data = getLocalStorageData("todoList");
    if (data === "") return;
    try {
      setTableItems(JSON.parse(data));
    } catch {
      console.error("Wrong local storage data");
    }
  }, []);

  const updateLocalStorageData = (data: TableItemType[]) => {
    setLocalStorageData("todoList", JSON.stringify(data));
  };

  const updateTaskStatus = (index: number) => {
    setTableItems((prev) => {
      const tempTableItems = [...prev];
      const currentStatus = tempTableItems[index].status;
      tempTableItems[index].status =
        currentStatus === TASK_STATUS.COMPLETED
          ? TASK_STATUS.PENDING
          : TASK_STATUS.COMPLETED;
      updateLocalStorageData(tempTableItems);
      return tempTableItems;
    });
  };

  const addNewTask = (newTask: TableItemType) => {
    setTableItems((prev) => {
      const newTableItems = [...prev, newTask];
      updateLocalStorageData(newTableItems);
      return newTableItems;
    });
  };

  const deleteTask = (index: number) => {
    setTableItems(prev => {
        const newTableItems = [...prev];
        newTableItems.splice(index,1);
        updateLocalStorageData(newTableItems);
        return newTableItems;
    })
  }

  return (
    <div>
      <TodoTable tableItems={tableItems} updateTaskStatus={updateTaskStatus} deleteTask={deleteTask} />
      <TodoAddTask addNewTask={addNewTask} />
    </div>
  );
};

export default TodoListWithLocalStorage;
