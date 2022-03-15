import * as React from 'react';
import "./button.scss";

const Button = ({ message = "Hello world" }) => {
  console.log("this is button abc");
  return <button>{message}</button>;
};
export default Button;
