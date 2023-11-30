import React, { useState } from "react";
import ShowAllTasks from "./taskInnerComp/ShowAllTasks";
import SortBy from "./taskInnerComp/SortBy";

const ShowTasks = () => {
  // Toggle show task filter
  const [showIsCompleted, setShowIsCompleted] = useState(false);
  return (
    <>
      <div className="showTasksContainer">
        <div className="showTasksWrapper">
          <div className="showTasksNav">
            {/* All */}
            <button
              onClick={() => setShowIsCompleted(false)}
              style={{ color: !showIsCompleted ? "#00bfffcc" : "" }}
            >
              All
            </button>

            {/* Completed */}
            <button
              onClick={() => setShowIsCompleted(true)}
              style={{ color: showIsCompleted ? "#00bfffcc" : "" }}
            >
              Completed
            </button>

            {/* SortBy */}
            <SortBy />
          </div>
          <ShowAllTasks fetchIsComplete={showIsCompleted} />
        </div>
      </div>
    </>
  );
};

export default ShowTasks;
