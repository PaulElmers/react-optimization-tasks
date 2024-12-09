import React, { useMemo, useState } from "react";

const ExpensiveCalculation = ({ num }) => {
  const result = useMemo(() => {
    console.log("Performing expensive calculation");
    let res = 0;
    for (let i = 0; i < 1e7; i++) {
      res += num;
    }
    return res;
  }, [num]);

  return <p>Result: {result}</p>;
};

const App = () => {
  const [num, setNum] = useState(1);

  return (
    <div>
      <ExpensiveCalculation num={num} />
      <button onClick={() => setNum((prev) => prev + 1)}>Increase</button>
    </div>
  );
};

export default App;
