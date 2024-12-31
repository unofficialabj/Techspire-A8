import React from "react";
import reactLogo from "./assets/react.svg";

const Card = (props) => {
  console.log(props, "this is props");

  const { name, address } = props;
  return (
    <div id="card">
      <img src={reactLogo} height={"100px"} />
      <div id="details">
        <div>
          <span>Name:</span> {name}
        </div>
        <div>
          <span>Address:</span> {address}
        </div>
        <div>
          <span>DOB:</span> 2001-12-31
        </div>
        <div>
          <span>Phone:</span> 9876543210
        </div>
      </div>
    </div>
  );
};

export default Card;
