import React from "react";

function ServiceList(props) {
  return props.types.map((type) => (
    <li key={Math.random()} className="type">
      {type}
    </li>
  ));
}

export default ServiceList;
