import React, { useState } from "react";

function ListItems(props) {
  return (
    <li
      onClick={() => {
        props.delete(props.id);
      }}
    >
      {props.content}
    </li>
  );
}

export default ListItems;
