import React from "react";

const InfoPanel = React.memo(({ visible }) => {
  console.log("InfoPanel rendered");
  return visible ? <p>Here is some information.</p> : null;
});

export default InfoPanel;
