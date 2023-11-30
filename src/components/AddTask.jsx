import React, { useContext, useState } from "react";
import Title from "./taskInnerComp/Title";
import Description from "./taskInnerComp/Description";
import { Context } from "../context/Context";
import ToolsDiv from "./taskInnerComp/ToolsDiv";
import defaultTaskValue from "../helpers/defaultTaskValue";

const AddTask = () => {
  const { taskValue, setTaskValue } = useContext(Context);
  const [cssDisplay, setCssDisplay] = useState({ display: "none" });

  // Show add task full div
  const showDisplay = () => {
    if (cssDisplay.display.length === 4) {
      setCssDisplay({ display: "" });
    }
  };

  // hide addtask full div
  const hideDisplay = () => {
    setCssDisplay({ display: "none" });
    setTaskValue(defaultTaskValue);
  };

  return (
    <div className="addTaskContainer">
      <div className="addTaskDiv" onClick={showDisplay}>
        <Title useTaskValue={taskValue} setUseTaskValue={setTaskValue} />
        <Description
          useTaskValue={taskValue}
          setUseTaskValue={setTaskValue}
          initStyle={cssDisplay}
        />
        <ToolsDiv
          style={cssDisplay}
          method={"save"}
          useTaskValue={taskValue}
          setUseTaskValue={setTaskValue}
          afterTaskFunc={hideDisplay}
        />
      </div>
    </div>
  );
};

export default AddTask;
