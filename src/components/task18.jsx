import React, { useState } from "react";

const ChildComponent = React.memo(({ value }) => {
  console.log("ChildComponent rendered");
  return <p>Value: {value}</p>;
});

const ParentComponent = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <ChildComponent value={value} />
      <button onClick={() => setValue(value + 1)}>Increase Value</button>
    </div>
  );
};

export default ParentComponent;
