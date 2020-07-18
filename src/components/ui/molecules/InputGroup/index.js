import React from 'react';
import './styles.scss'

import Label from '../../atoms/Label';
import Input from '../../atoms/Input';

export default function InputGroup({name, fnc}) {
  return (
    <div className="inputGroup">
      <Label name={name} />
      <Input fnc={text => fnc(text)} name={name} />
    </div>
  )
}