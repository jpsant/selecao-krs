import React from 'react';
import './styles.scss'

import Label from '../../atoms/Label';
import Input from '../../atoms/TextInput';

export default function InputGroup({name, fnc, required, value}) {
  return (
    <div className="inputGroup">
      <Label name={name} />
      <Input value={value} required={required} fnc={text => fnc(text)} name={name} />
    </div>
  )
}