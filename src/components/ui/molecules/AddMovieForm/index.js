import React from "react";
import "./styles.scss";

import CloseButton from "../../atoms/CloseButton";
import ConfirmButton from "../../atoms/ConfirmButton";

export default function AddMovieForm({ show, close }) {
  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0",
      }}
      className="addMovieForm"
    >
      <div className="addMovieForm-closeButton">
        <CloseButton fnc={close} />
      </div>
      <div className="addMovieForm__formContainer">
        <div className="addMovieForm__formContainer__title">
          <h1 className="addMovieForm__formContainer__title-h1">
            Adicionar Filme
          </h1>
          <h2 className="addMovieForm__formContainer__title-h2">
            Preencha todos os campos abaixo:
          </h2>
        </div>
        <ConfirmButton text="Cadastrar Filme" />
      </div>
    </div>
  );
}
