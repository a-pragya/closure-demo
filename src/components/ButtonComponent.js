import React from "react";

const Button = (props) => {
  console.log("button component rendered");
  return <button onClick={props.onClick}>{props.children}</button>;
};

export default React.memo(Button);
