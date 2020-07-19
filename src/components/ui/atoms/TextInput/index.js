import React from "react";
import "./styles.scss";

export default function TextInput({ name, fnc, width, required, value }) {
  return (
    <input
      defaultValue={value}
      required={required}
      style={{ width: width ? width : "" }}
      className="textInput"
      type="text"
      name={name}
      onChange={(e) => fnc(e.target.value)}
    />
  );
}
