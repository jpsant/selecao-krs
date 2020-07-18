import React from "react";
import "./styles.scss";

export default function Input({ name, fnc }) {
  return (
    <input
      className="textInput"
      type="text"
      name={name}
      onChange={(e) => fnc(e.target.value)}
    />
  );
}
