import React, { useCallback } from "react";

const AlertButton = React.memo(({ onClick }) => {
  console.log("Button rendered");
  return <button onClick={onClick}>Show Alert</button>;
});

const App = () => {
  const handleClick = useCallback(() => {
    alert("Button clicked!");
  }, []);

  return (
    <div>
      <AlertButton onClick={handleClick} />
    </div>
  );
};

export default App;
