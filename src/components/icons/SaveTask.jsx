import React, { useContext, useCallback } from "react";
import { Context } from "../../context/Context";
import { toast } from "react-hot-toast";
import setLocaleStorage from "../../helpers/setLocaleStorage";
import generateId from "../../helpers/generateId";

const SaveTask = ({ method, id, afterTaskFunc }) => {
  const { tasks, taskValue, fullTaskValue, setReRender } = useContext(Context);

  // Err notification
  function callErr() {
    return toast.error("Please add Title");
  }

  const handleSave = useCallback(() => {
    // Add task
    if (method === "save") {
      if (taskValue.title.length < 1) {
        return callErr();
      }
      const newTask = { ...taskValue, id: generateId() };
      const updatedTasks = [...tasks, newTask];
      setLocaleStorage(updatedTasks);
      afterTaskFunc();
    }

    // Edit task
    if (method === "edit") {
      if (fullTaskValue.title.length < 1) {
        return callErr();
      }
      const storedData = JSON.parse(localStorage.getItem("tasks")) || [];
      const updatedTasks = storedData.map((task) =>
        task.id === id ? { ...task, ...fullTaskValue } : task
      );
      setLocaleStorage(updatedTasks);
      afterTaskFunc();
    }

    setReRender((prev) => !prev);
  }, [method, id, taskValue, fullTaskValue]);

  return (
    <span className="save icons" onClick={handleSave}>
      Save
    </span>
  );
};

export default SaveTask;
