import React, { useRef } from "react";
import { ChevronDown } from "lucide-react";
import showDropDown from "../../helpers/showDropDown";

const Priority = ({ useTaskValue, setUseTaskValue }) => {
  const dropDownRef = useRef(null); // DropDown Button
  const downArrowRef = useRef(null); // DropDown Arrow

  // Adding li dataset value in task value
  const addLiValue = (e) => {
    const { value } = e.target.dataset;
    setUseTaskValue((pre) => {
      return { ...pre, priority: value };
    });
  };

  // Li component
  const lis = (val, text) => {
    return (
      <li data-value={val} onClick={addLiValue}>
        {text}
      </li>
    );
  };

  return (
    <button
      className="priority"
      onClick={() => showDropDown(dropDownRef, downArrowRef, "flex")}
    >
      <span>Priority: {useTaskValue.priority}</span>
      <ChevronDown className="icons" size={18} ref={downArrowRef} />

      <ul className="dropDown" ref={dropDownRef}>
        {lis("low", "Low")}
        {lis("medium", "Medium")}
        {lis("high", "High")}
      </ul>
    </button>
  );
};

export default Priority;
