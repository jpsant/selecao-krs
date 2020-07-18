import React from "react";
import './styles.scss';

export default function Backdrop({ toggle, show }) {
  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "0.7" : "0",
      }}
      className="backdrop"
      onClick={() => toggle()}
    ></div>
  );
}
