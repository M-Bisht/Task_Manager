import { useEffect, useState } from "react";
import { Context } from "./Context";
import defaultTaskValue from "../helpers/defaultTaskValue";

const Provider = ({ children }) => {
  // Data in local storage or not
  const initialTaskData = JSON.parse(localStorage.getItem("tasks")) || [];

  // Store all task in array
  const [tasks, setTasks] = useState(initialTaskData);

  // Add note task values
  const [taskValue, setTaskValue] = useState(defaultTaskValue);

  // Full note task values
  const [fullTaskValue, setFullTaskValue] = useState(defaultTaskValue);

  // Rerender comp to show updated tasks
  const [reRender, setReRender] = useState(false);

  // Enable show completed tasks comp
  const [showFullTask, setShowFullTask] = useState(false);

  // Sort tasks by priority
  const [sortValue, setSortValue] = useState("all");

  // Add all tasks in tasks array on rerender
  useEffect(() => {
    setTasks(initialTaskData);
  }, [reRender]);

  const contextValue = {
    tasks,
    setTasks,
    taskValue,
    setTaskValue,
    reRender,
    setReRender,
    showFullTask,
    setShowFullTask,
    fullTaskValue,
    setFullTaskValue,
    sortValue,
    setSortValue,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default Provider;
