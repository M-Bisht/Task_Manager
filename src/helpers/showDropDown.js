const showDropDown = (dropDownRef, downArrowRef, display) => {
  const dropDownStyle = dropDownRef.current.style;
  const downArrowStyle = downArrowRef.current.style;

  if (dropDownStyle.display === display) {
    dropDownStyle.display = "none";
    downArrowStyle.transform = "rotate(0deg)";
  } else {
    dropDownStyle.display = display;
    downArrowStyle.transform = "rotate(180deg)";
  }
};

export default showDropDown;
