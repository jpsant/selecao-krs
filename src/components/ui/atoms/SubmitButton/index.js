import React from "react";
import './styles.scss';

export default function SubmitButton({ fnc, text }) {
  return <button onClick={fnc} className="submitButton">{text}</button>;
}
