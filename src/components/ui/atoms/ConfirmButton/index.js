import React from 'react';
import './styles.scss';

export default function ConfirmButton({fnc, children}) {
  return (
    <button className="confirmButton" onClick={fnc}>
      {children}
    </button>
  )
}