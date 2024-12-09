import React, { useCallback, useState } from "react";

const ChildButton = React.memo(({ onClick }) => {
  console.log("ChildButton rendered");
  return <button onClick={onClick}>Click Me</button>;
});

const Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <ChildButton onClick={handleClick} />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};

export default Parent;
