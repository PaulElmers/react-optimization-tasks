import React, { useState, useCallback } from "react";

const App = () => {
  const [state, setState] = useState(false);
  const [enabled, setEnabled] = useState(true);

  const toggleState = useCallback(() => {
    if (enabled) {
      setState((prev) => !prev);
    }
  }, [enabled]);

  return (
    <div>
      <button onClick={toggleState}>
        {state ? "Disable" : "Enable"} State
      </button>
      <button onClick={() => setEnabled((prev) => !prev)}>
        {enabled ? "Disable" : "Enable"} Changes
      </button>
    </div>
  );
};

export default App;
