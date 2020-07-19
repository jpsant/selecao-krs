import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actionCreators from '../../../../store/actions/actionCreators';
import "./styles.scss";

import CloseButton from "../../atoms/CloseButton";
import TextInputGroup from "../../molecules/TextInputGroup";
import RadioInputGroup from "../../molecules/RadioInputGroup";

export default function EditMovieForm({ show, close }) {
  const movieList = useSelector((state) => state.movieList);
  const dispatch = useDispatch();

  const [movie, movieHandler] = useState({
    title: "",
    sinopsis: "",
    gender: "",
    launchDate: "",
    language: "",
    director: "",
    imdb: "",
    score: "",
    subtitle: false,
  });

  const handleInput = (input, field) => {
    movieHandler({ ...movie, [field]: input });
  };

  const movieFormHandler = (e) => {
    e.preventDefault();
    // let newMovie = movie;
    // newMovie.id = movieList.length;
    // let newMovieList = [...movieList, newMovie]
    // dispatch(actionCreators.initAddingMovie(newMovieList, newMovie));
  };

  return (
    <div
      className="editMovieForm"
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0",
      }}
    >
      <div className="editMovieForm-closeButton">
        <CloseButton fnc={close} />
      </div>
      <div className="editMovieForm__formBody">
        <div className="editMovieForm__formBody__title">
          <h1 className="editMovieForm__formBody__title-h1">Editar Filme</h1>
        </div>
        <form
          className="editMovieForm__formBody__form"
          onSubmit={movieFormHandler}
        >
          <div className="editMovieForm__formBody__form__title">
            <TextInputGroup
              required={true}
              fnc={(e) => handleInput(e, "title")}
              name="Titulo"
            />
          </div>
          <div className="editMovieForm__formBody__form__sinopsis">
            <TextInputGroup
              required={true}
              fnc={(e) => handleInput(e, "sinopsis")}
              name="Sinopse"
            />
          </div>
          <div className="editMovieForm__formBody__form__gender">
            <TextInputGroup
              required={true}
              fnc={(e) => handleInput(e, "gender")}
              name="Genero"
            />
          </div>
          <div className="editMovieForm__formBody__form__launch">
            <TextInputGroup
              required={true}
              fnc={(e) => handleInput(e, "launchDate")}
              name="Data de lançamento"
            />
          </div>
          <div className="editMovieForm__formBody__form__language">
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
          <div className="editMovieForm__formBody__form__imdb">
            <TextInputGroup
              fnc={(e) => handleInput(e, "imdb")}
              name="IMDB Link"
            />
          </div>
          <div className="editMovieForm__formBody__form__score">
            <TextInputGroup
              fnc={(e) => handleInput(e, "score")}
              name="Avaliação"
            />
          </div>
          <div className="editMovieForm__formBody__form__subtitle">
            <h2 className="editMovieForm__formBody__form__subtitle-h2">
              É legendado? <span>*</span>
            </h2>
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
          <button className="editMovieForm__formBody__form-button" type="submit">
            Editar filme
          </button>
        </form>
      </div>
    </div>
  );
}
