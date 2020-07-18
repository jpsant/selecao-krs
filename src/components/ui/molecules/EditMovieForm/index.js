import React from "react";
import "./styles.scss";

import CloseButton from "../../atoms/CloseButton";
import ConfirmButton from "../../atoms/ConfirmButton";

export default function EditMovieForm({ show, close }) {
  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0",
      }}
      className="editMovieForm"
    >
      <div className="editMovieForm-closeButton">
        <CloseButton fnc={close} />
      </div>
      <div className="editMovieForm__formContainer">
        <div className="editMovieForm__formContainer__title">
          <h1 className="editMovieForm__formContainer__title-h1">
            Editar filme
          </h1>
        </div>
        <ConfirmButton text="Cadastrar Filme" />
      </div>
    </div>
  );
}
