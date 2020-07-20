import React from "react";
import "./styles.scss";

export default function TextInput({ name, fnc, required, value }) {
  return (
    <input
      value={value}
      required={required}
      className="textInput"
      type="text"
      name={name}
      onChange={(e) => fnc(e.target.value)}
    />
  );
}
