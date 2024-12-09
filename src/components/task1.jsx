import React, { useState } from "react";

const ToggleParagraph = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "Hide" : "Show"} Paragraph
      </button>
      {show && <p>This is a toggleable paragraph.</p>}
    </div>
  );
};

export default ToggleParagraph;
