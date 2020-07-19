import React from "react";
import "./styles.scss";

import EditButton from "../../atoms/EditButton";
import DeleteButton from "../../atoms/DeleteButton";

export default function MovieCard({ editModal, deleteModal, movie }) {
  return (
    <div className="movieCard">
      <div className="movieCard__editButton">
        <EditButton fnc={editModal} />
      </div>
      <div className="movieCard__deleteButton">
        <DeleteButton fnc={deleteModal} />
      </div>
      <div className="movieCard__title">
        <h1>{movie.title}</h1>
        <h3>{movie.launchDate}</h3>
        <h3>{movie.gender}</h3>
      </div>
      <div className="movieCard__sinopsis">
        <h2>Sinopse: <span>{movie.sinopsis}</span></h2>
      </div>
      <div className="movieCard__director">
        <h2>Diretor: <span>{movie.director}</span></h2>
      </div>
      <div className="movieCard__language">
        <h2>Língua: <span>{movie.language}</span></h2>
      </div>
      <div className="movieCard__subtitle">
        <h2>Legendado: <span>{movie.subtitle}</span></h2>
      </div>
    </div>
  );
}
