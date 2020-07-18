import React from "react";
import "./styles.scss";

export default function Label({ name }) {
  return (
    <label className="label" htmlFor={name}>
      {name} <span>*</span>
    </label>
  );
}
