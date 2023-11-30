import React, { useCallback } from "react";

const Title = ({ useTaskValue, setUseTaskValue }) => {
  // Update title value
  const inputHandler = useCallback(
    (e) => {
      setUseTaskValue((pre) => ({ ...pre, title: e.target.value }));
    },
    [setUseTaskValue]
  );

  return (
    <input
      type="text"
      placeholder="Enter your title"
      className={"title"}
      onChange={inputHandler}
      value={useTaskValue.title}
    />
  );
};

export default Title;
