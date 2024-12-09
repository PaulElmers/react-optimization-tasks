import React, { useMemo } from "react";

const SortedList = ({ numbers }) => {
  const sortedNumbers = useMemo(() => {
    console.log("Sorting numbers");
    return [...numbers].sort((a, b) => a - b);
  }, [numbers]);

  return (
    <ul>
      {sortedNumbers.map((num, idx) => (
        <li key={idx}>{num}</li>
      ))}
    </ul>
  );
};

export default SortedList;
