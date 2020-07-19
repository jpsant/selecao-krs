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
      </div>
      <div className="movieCard__sinopsis">
        <h2>Sinopse: <span>{movie.sinopsis}</span></h2>
      </div>
      <div className="movieCard__gender">
        <h2>Gênero: <span>{movie.gender}</span></h2>
      </div>
      <div className="movieCard__launchDate">
        <h2>Data de lançamento: <span>{movie.launchDate}</span></h2>
      </div>
      <div className="movieCard__director">
        <h2>Diretor: <span>{movie.director}</span></h2>
      </div>
      <div className="movieCard__language">
        <h2>Língua: <span>{movie.language}</span></h2>
      </div>
      <div className="movieCard__subtitle">
        <h2>Legendado: <span>{movie.subtitle ? "Sim" : "Não"}</span></h2>
      </div>
    </div>
  );
}
