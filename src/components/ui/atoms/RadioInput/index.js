import React from 'react';
import './styles.scss';

export default function RadioInput({value, inputName, fnc, required, defaultChecked}) {
  return <input checked={defaultChecked} required={required} className="radioInput" type="radio" onChange={fnc} name={inputName} value={value} />
}