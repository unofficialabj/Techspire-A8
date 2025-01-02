import React from "react";

const Footer = (props) => {
  console.log(props, "this is props from footer component");

  return <div>Valid till {props.date} </div>;
};

export default Footer;
