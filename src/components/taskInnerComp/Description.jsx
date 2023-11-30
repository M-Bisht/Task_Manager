import React, { useCallback, useEffect, useRef } from "react";

const Description = ({ initStyle, useTaskValue, setUseTaskValue }) => {
  const textareaRef = useRef(null);

  // Update description value
  const textareaHandler = useCallback(
    (e) => {
      setUseTaskValue((prev) => ({ ...prev, description: e.target.value }));
    },
    [setUseTaskValue]
  );

  const { description } = useTaskValue;

  // Increase description height
  useEffect(() => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";

    const textareaHeight = textarea.clientHeight;
    const textareaScrollHeight = textarea.scrollHeight;

    if (description.length !== 0 && textareaScrollHeight > textareaHeight) {
      textarea.style.height = `${textareaScrollHeight + 1}px`;
      textarea.style.maxHeight = "480px";
    }
  }, [description]);

  return (
    <textarea
      className={"description"}
      placeholder="Enter your description"
      onChange={textareaHandler}
      value={description}
      style={initStyle}
      ref={textareaRef}
    ></textarea>
  );
};

export default Description;
