import React from "react";
import reactLogo from "../assets/react.svg";
import ProfileImage from "./ProfileImage";
import Detail from "./Detail";
import Footer from "./Footer";

const Card = (props) => {
  console.log(props, "this is props from card component");

  const { date, ...rest } = props;

  return (
    <div id="card">
      <ProfileImage />
      <Detail {...rest} />
      <Footer date={date} />
    </div>
  );
};

export default Card;
