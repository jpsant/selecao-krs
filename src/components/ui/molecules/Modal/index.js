import React from "react";
import "./styles.scss";

import CloseButton from "../../../ui/atoms/CloseButton";

export default function Modal({ children, close, show }) {
  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0",
      }}
      className="modal"
    >
      <CloseButton fnc={close} />
      {children}
    </div>
  );
}
