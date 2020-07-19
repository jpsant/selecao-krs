import React from 'react';
import './styles.scss';

import Label from '../../atoms/Label';
import RadioInput from '../../atoms/RadioInput';

export default function RadioInputGroup({name, inputName, value, fnc, required}) {
  return (
    <div className="radioInputGroup">
      <Label name={name} />
      <RadioInput required={required} inputName={inputName} value={value} fnc={() => fnc(value)} />
    </div>
  )
}