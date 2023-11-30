import React, { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import { ChevronDown, CheckSquare } from "lucide-react";
import { priorityColors } from "../../helpers/priorityColors";
import showDropDown from "../../helpers/showDropDown";

const SortBy = () => {
  const { sortValue, setSortValue } = useContext(Context);

  const dropDownRef = useRef(null); // DropDown Button
  const downArrowRef = useRef(null); // DropDown Arrow

  // Li component
  const lis = (val, text) => {
    return (
      <div onClick={() => setSortValue(val)}>
        {sortValue === val ? (
          <CheckSquare size={18} color={priorityColors[val]} />
        ) : (
          <div
            className="checkBox"
            style={{ borderColor: priorityColors[val] }}
          ></div>
        )}

        <li data-value={val}>{text}</li>
      </div>
    );
  };

  return (
    <div
      className="sortByButton"
      onClick={() => showDropDown(dropDownRef, downArrowRef, "block")}
    >
      <span>Sort By</span>
      <ChevronDown className="icons" size={18} ref={downArrowRef} />

      <ul className="sortByDropDown" ref={dropDownRef}>
        {lis("all", "All")}
        {lis("low", "Low")}
        {lis("medium", "Medium")}
        {lis("high", "High")}
      </ul>
    </div>
  );
};

export default SortBy;
