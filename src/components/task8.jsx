import React, { useState } from "react";

const Profile = React.memo(({ showDetails }) => {
  console.log("Profile rendered");
  return showDetails ? <p>User details here.</p> : null;
});

const App = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <button onClick={() => setShowDetails((prev) => !prev)}>
        Toggle Details
      </button>
      <Profile showDetails={showDetails} />
    </div>
  );
};

export default App;
