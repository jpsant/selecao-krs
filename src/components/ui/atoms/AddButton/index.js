import React from 'react';
import './styles.scss';

import AddIcon from '../../../../assets/addIcon.svg';

export default function AddButton({fnc}) {
  return (
    <button className="addButton" onClick={fnc}>
      <img src={AddIcon} alt="Add Icon"/>
    </button>
  );
};