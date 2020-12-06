import React from "react";

const ListGroup = (props) => {
  const { items, currentItem, onSelect, idProperty, textProperty } = props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          className={
            currentItem[idProperty] === item[idProperty]
              ? "list-group-item active"
              : "list-group-item"
          }
          style={{ cursor: "pointer" }}
          key={item[idProperty]}
          onClick={() => {
            onSelect(item);
          }}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  idProperty: "_id",
  textProperty: "name",
};
export default ListGroup;
