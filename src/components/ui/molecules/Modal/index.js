import React from 'react';
import './styles.scss';

import ConfirmButton from '../../../ui/atoms/ConfirmButton';
import CloseButton from '../../../ui/atoms/CloseButton'

export default function Modal({fnc, children}) {
  return (
    <div className="modal">
      <CloseButton />
      {children}
      <ConfirmButton text="Confirmar" />
    </div>
  )
}