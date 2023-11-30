import React, { useContext } from "react";
import { Context } from "../../context/Context";
import Delete from "../icons/Delete";
import CheckBox from "../icons/CheckBox";
import setLocaleStorage from "../../helpers/setLocaleStorage";

const ShowAllTasks = ({ fetchIsComplete }) => {
  const { tasks, setReRender, setShowFullTask, sortValue } =
    useContext(Context);

  // Toggle task tick or not
  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task, i) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setLocaleStorage(updatedTasks);
    setReRender((prev) => !prev);
  };

  // Show full task
  const showFullTask = (taskId) => {
    window.history.pushState(null, "", `?id=${taskId}`);
    setShowFullTask((pre) => !pre);
  };

  // Sort Task
  const sortTask = (task) => {
    if (sortValue === "all") {
      return task;
    }
    return task.priority === sortValue;
  };

  // Filter tasks
  const filterTask = (task) => {
    return fetchIsComplete ? task.isCompleted : task;
  };

  // Map tasks
  const mapTask = ({ id, title, isCompleted, priority }, index) => {
    return (
      <div key={id} className="task">
        <div className="texts" onClick={() => showFullTask(id)}>
          <h3
            style={{
              textDecoration: isCompleted ? "line-through" : "none",
            }}
          >{`${index + 1}: ${title}`}</h3>
        </div>

        <div className="tools">
          <Delete id={id} />
          <CheckBox
            taskIsCompleted={isCompleted}
            toggleTaskFunc={() => toggleTaskCompletion(id)}
            priority={priority}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="showAllTasksContainer">
      {tasks
        .filter((task) => sortTask(task))
        .filter((task) => filterTask(task))
        .map((task, index) => mapTask(task, index))}
    </div>
  );
};

export default ShowAllTasks;
