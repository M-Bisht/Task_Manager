import React from "react";
import Priority from "./Priority";
import SaveTask from "../icons/SaveTask";
import Cross from "../icons/Cross";
import Delete from "../icons/Delete";
import useFetchTask from "../../hooks/useFetchTask";

const ToolsDiv = ({
  style,
  method,
  id,
  useTaskValue,
  setUseTaskValue,
  afterTaskFunc,
}) => {
  const commonProps = {
    afterTaskFunc,
  };
  const data = useFetchTask();

  return (
    <div className="toolsDiv" style={style}>
      <Priority useTaskValue={useTaskValue} setUseTaskValue={setUseTaskValue} />

      <div className="iconsDiv">
        <SaveTask method={method} id={id} {...commonProps} />
        {data && <Delete id={id} {...commonProps} />}
        <Cross {...commonProps} />
      </div>
    </div>
  );
};

export default ToolsDiv;
