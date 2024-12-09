import React, { useMemo, useCallback } from "react";

const ChildList = React.memo(({ numbers }) => {
  console.log("ChildList rendered");
  return (
    <ul>
      {numbers.map((num, idx) => (
        <li key={idx}>{num}</li>
      ))}
    </ul>
  );
});

const Parent = () => {
  const numbers = useMemo(() => [1, 2, 3, 4, 5], []);
  const updateNumbers = useCallback(() => console.log("Update"), []);

  return (
    <div>
      <ChildList numbers={numbers} />
      <button onClick={updateNumbers}>Log Numbers</button>
    </div>
  );
};

export default Parent;
