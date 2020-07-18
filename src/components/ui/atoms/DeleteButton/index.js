import React from 'react';
import './styles.scss';

import DeleteIcon from '../../../../assets/deleteIcon.svg';

export default function DeleteButton({fnc}) {
  return (
    <button className="deleteButton" onClick={fnc}>
      <img src={DeleteIcon} alt="Delete Icon"/>
    </button>
  );
};