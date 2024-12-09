import React, { useState, useCallback } from "react";

const AddRemoveButtons = () => {
  const [items, setItems] = useState([]);

  const addItem = useCallback(() => {
    setItems((prev) => [...prev, `Item ${prev.length + 1}`]);
  }, []);

  const removeItem = useCallback(() => {
    setItems((prev) => prev.slice(0, -1));
  }, []);

  return (
    <div>
      <button onClick={addItem}>Add</button>
      <button onClick={removeItem}>Remove</button>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddRemoveButtons;
