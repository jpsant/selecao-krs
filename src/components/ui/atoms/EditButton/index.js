import React from 'react';
import './styles.scss';

import EditIcon from '../../../../assets/editIcon.svg';

export default function EditButton({fnc}) {
  return (
    <button className="editButton" onClick={fnc}>
      <img src={EditIcon} alt="Edit Icon"/>
    </button>
  );
};