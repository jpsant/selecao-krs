import React, { useState } from "react";
import "./styles.scss";

import CloseButton from "../../atoms/CloseButton";
// import ConfirmButton from "../../atoms/ConfirmButton";
import TextInputGroup from "../../molecules/TextInputGroup";
import RadioInputGroup from "../../molecules/RadioInputGroup";

export default function AddMovieForm({ show, close }) {
  const [movie, movieHandler] = useState({
    title: "",
    sinopsis: "",
    gender: "",
    launchDate: "",
    languaga: "",
    director: "",
    imdb: "",
    score: "",
    subtitle: false,
  });

  const handleInput = (input, field) => {
    let newMovie = movie;
    newMovie[field] = input;
    movieHandler({ ...movie, newMovie });
  };

  const movieFormHandler = (e) => {
    e.preventDefault();
    console.log(movie);
  };

  return (
    <div
      className="addMovieForm"
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0",
      }}
    >
      <div className="addMovieForm-closeButton">
        <CloseButton fnc={close} />
      </div>
      <div className="addMovieForm__formBody">
        <div className="addMovieForm__formBody__title">
          <h1 className="addMovieForm__formBody__title-h1">Adicionar Filme</h1>
          <h2 className="addMovieForm__formBody__title-h2">
            Preencha todos os campos abaixo:
          </h2>
        </div>
        <form
          className="addMovieForm__formBody__form"
          onSubmit={movieFormHandler}
        >
          <div className="addMovieForm__formBody__form__title">
            <TextInputGroup
              required={true}
              fnc={(e) => handleInput(e, "title")}
              name="Titulo"
            />
          </div>
          <div className="addMovieForm__formBody__form__sinopsis">
            <TextInputGroup
              required={true}
              fnc={(e) => handleInput(e, "sinopsis")}
              name="Sinopse"
            />
          </div>
          <div className="addMovieForm__formBody__form__gender">
            <TextInputGroup
              required={true}
              fnc={(e) => handleInput(e, "gender")}
              name="Genero"
            />
          </div>
          <div className="addMovieForm__formBody__form__launch">
            <TextInputGroup
              required={true}
              fnc={(e) => handleInput(e, "launchDate")}
              name="Data de lançamento"
            />
          </div>
          <div className="addMovieForm__formBody__form__language">
            <TextInputGroup
              required={true}
              fnc={(e) => handleInput(e, "language")}
              width="120px"
              name="Idioma"
            />
            <TextInputGroup
              fnc={(e) => handleInput(e, "director")}
              width="120px"
              name="Diretor"
            />
          </div>
          <div className="addMovieForm__formBody__form__imdb">
            <TextInputGroup
              fnc={(e) => handleInput(e, "imdb")}
              name="IMDB Link"
            />
          </div>
          <div className="addMovieForm__formBody__form__score">
            <TextInputGroup
              fnc={(e) => handleInput(e, "score")}
              name="Avaliação"
            />
          </div>
          <div className="addMovieForm__formBody__form__subtitle">
            <h2 className="addMovieForm__formBody__form__subtitle-h2">É legendado? <span>*</span></h2>
            <RadioInputGroup
              required={true}
              inputName="subtitle"
              name="Sim"
              value={true}
              fnc={(value) => handleInput(value, "subtitle")}
            />
            <RadioInputGroup
              inputName="subtitle"
              name="Não"
              value={false}
              fnc={(value) => handleInput(value, "subtitle")}
            />
          </div>
          <button className="addMovieForm__formBody__form-button" type="submit">
            Cadastrar filme
          </button>
        </form>
      </div>
    </div>
  );
}