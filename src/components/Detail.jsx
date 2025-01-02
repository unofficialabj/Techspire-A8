import React from "react";

const Detail = (props) => {
  console.log(props, "this is props from detail component");

  const { name, address, blood, phone } = props;
  return (
    <div id="details">
      <div>
        <span>Name:</span>
        {name}
      </div>
      <div>
        <span>Address:</span>
        {address}
      </div>
      <div>
        <span>Blood Group:</span>
        {blood}
      </div>
      <div>
        <span>Phone:</span>
        {phone}
      </div>
    </div>
  );
};

export default Detail;
