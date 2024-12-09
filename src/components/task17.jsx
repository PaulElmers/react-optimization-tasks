import React from "react";

const ListItem = React.memo(({ value }) => {
  console.log(`Rendering item: ${value}`);
  return <li>{value}</li>;
});

const LongList = ({ items }) => {
  return (
    <ul>
      {items.map((item, idx) => (
        <ListItem key={idx} value={item} />
      ))}
    </ul>
  );
};

export default LongList;
