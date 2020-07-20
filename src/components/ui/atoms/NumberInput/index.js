import React from "react";
import "./styles.scss";

export default function NumberInput({ name, fnc, value }) {
  return (
    <input
      value={value}
      className="numberInput"
      type="number"
      name={name}
      onChange={(e) => fnc(e.target.value)}
    />
  );
}
