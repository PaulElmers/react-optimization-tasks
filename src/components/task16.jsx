import React, { useState, useMemo } from "react";

const SortedList = ({ items }) => {
  const sortedItems = useMemo(() => {
    console.log("Sorting items");
    return [...items].sort();
  }, [items]);

  return (
    <ul>
      {sortedItems.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
};

const App = () => {
  const [list, setList] = useState(["Banana", "Apple", "Orange"]);

  return (
    <div>
      <SortedList items={list} />
      <button onClick={() => setList([...list, "Grapes"])}>Add Item</button>
    </div>
  );
};

export default App;
