import React from 'react';
import './styles.scss'

import Label from '../../atoms/Label';
import Input from '../../atoms/NumberInput';

export default function InputGroup({name, fnc, value}) {
  return (
    <div className="inputGroup">
      <Label name={name} />
      <Input value={value} fnc={number => fnc(number)} name={name} />
    </div>
  )
}