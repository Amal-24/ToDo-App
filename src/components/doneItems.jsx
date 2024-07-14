import React, { useState } from "react";

function DoneItems(props) {
  return (
    <li style={{ textDecoration: "line-through" }} onClick={()=>{
      props.add(props.doneelement,props.id)
    }}>{props.doneelement}</li>
  );
}

export default DoneItems;
