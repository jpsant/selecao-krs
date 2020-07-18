import React from "react";
import './styles.scss';

export default function ConfirmButton({ text, fnc }) {
  return <button className="confirmButton" onClick={fnc}>{text}</button>;
}
