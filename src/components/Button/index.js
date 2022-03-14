import React from "react";
import "./button.scss";
const Button = ({ message = "Hello world" }) => {
    console.log("this is button");
    return (
        <button>{message}</button>
    )
};
export default Button;
