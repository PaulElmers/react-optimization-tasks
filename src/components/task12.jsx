import React from "react";

const StableComponent = React.memo(() => {
  console.log("StableComponent rendered");
  return <p>I am stable</p>;
});

const ChangingComponent = ({ count }) => {
  console.log("ChangingComponent rendered");
  return <p>Count: {count}</p>;
};

const ParentComponent = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <StableComponent />
      <ChangingComponent count={count} />
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};

export default ParentComponent;
