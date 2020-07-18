import React from 'react';
import './styles.scss';

import EditButton from '../../atoms/EditButton';
import DeleteButton from '../../atoms/DeleteButton';

export default function MovieCard({editModal, deleteModal}) {
  return (
    <div className="movieCard">
      <div className="movieCard__editButton">
        <EditButton fnc={editModal} />
      </div>
      <div className="movieCard__deleteButton">
        <DeleteButton fnc={deleteModal} />
      </div>
    </div>
  )
}