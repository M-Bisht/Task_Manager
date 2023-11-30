import React, { useContext, useCallback } from "react";
import { Trash } from "lucide-react";
import { Context } from "../../context/Context";
import setLocaleStorage from "../../helpers/setLocaleStorage";

const Delete = ({ id, afterTaskFunc }) => {
  const { tasks, setReRender } = useContext(Context);

  // On delete update localStorage
  const onDelete = useCallback(() => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setLocaleStorage(updatedTasks);
    setReRender((prev) => !prev);
    if (afterTaskFunc) {
      afterTaskFunc();
    }
  }, [id, tasks, setReRender, setLocaleStorage, afterTaskFunc]);

  return <Trash onClick={onDelete} size={20} className="icons" />;
};

export default Delete;
