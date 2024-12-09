import React from "react";

const ListItem = React.memo(({ item }) => {
  console.log(`Rendering item: ${item}`);
  return <li>{item}</li>;
});

const List = ({ items }) => {
  return (
    <ul>
      {items.map((item, idx) => (
        <ListItem key={idx} item={item} />
      ))}
    </ul>
  );
};

export default List;
