import React, { useContext, useEffect, useState } from "react";
import Title from "./taskInnerComp/Title";
import Description from "./taskInnerComp/Description";
import { Context } from "../context/Context";
import ToolsDiv from "./taskInnerComp/ToolsDiv";
import useFetchTask from "../hooks/useFetchTask";
import defaultTaskValue from "../helpers/defaultTaskValue";

const FullTask = () => {
  const [cssDisplay, setCssDisplay] = useState({ display: "none" });
  const { fullTaskValue, setFullTaskValue } = useContext(Context);

  const data = useFetchTask();

  // Hide full task div and set full task value empty
  const hideDisplay = () => {
    setCssDisplay({ display: "none" });
    setFullTaskValue(defaultTaskValue);
    window.history.pushState(null, "", "/");
  };

  // Show full task div and set full task value
  useEffect(() => {
    if (data) {
      setCssDisplay({ display: "" });
      setFullTaskValue({ ...data });
    }
  }, [data]);

  const commonProps = {
    useTaskValue: fullTaskValue,
    setUseTaskValue: setFullTaskValue,
  };

  return (
    data && (
      <>
        <div
          className="fullTaskBg"
          style={cssDisplay}
          onClick={hideDisplay}
        ></div>

        <div className="fullTaskWrapper" style={cssDisplay}>
          <Title {...commonProps} />
          <Description {...commonProps} />
          <ToolsDiv
            style={cssDisplay}
            method={"edit"}
            id={data.id}
            afterTaskFunc={hideDisplay}
            {...commonProps}
          />
        </div>
      </>
    )
  );
};

export default FullTask;
