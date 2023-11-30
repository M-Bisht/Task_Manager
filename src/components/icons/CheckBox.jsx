import React from "react";
import { CheckSquare } from "lucide-react";
import { priorityColors } from "../../helpers/priorityColors";

const CheckBox = ({ taskIsCompleted, toggleTaskFunc, priority }) => {
  const commonProps = {
    onClick: toggleTaskFunc,
  };

  return (
    <>
      {taskIsCompleted ? (
        <CheckSquare
          size={18}
          color={priorityColors[priority]}
          {...commonProps}
        />
      ) : (
        <div
          className="checkBox"
          style={{ borderColor: priorityColors[priority] }}
          {...commonProps}
        ></div>
      )}
    </>
  );
};

export default CheckBox;
