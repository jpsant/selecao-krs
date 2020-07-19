import React from "react";
import "./styles.scss";

export default function LoadingSpinner({ show }) {
  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0",
      }}
      className="loader"
    ></div>
  );
}
