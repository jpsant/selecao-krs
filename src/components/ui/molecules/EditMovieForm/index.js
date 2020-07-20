import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actionCreators from "../../../../store/actions/actionCreators";
import "./styles.scss";

import CloseButton from "../../atoms/CloseButton";
import TextInputGroup from "../../molecules/TextInputGroup";
import NumberInputGroup from "../../molecules/NumberInputGroup";
import RadioInputGroup from "../../molecules/RadioInputGroup";

export default function EditMovieForm({ show, close, item }) {
  useEffect(() => {
    movieHandler(item);
  }, [item]);

  const movieList = useSelector((state) => state.movieList);
  const dispatch = useDispatch();

  const [id, idHandler] = useState('');
  const [title, titleHandler] = useState('');
  const [sinopsis, sinopsisHandler] = useState('');
  const [gender, genderHandler] = useState('');
  const [launchDate, launchDateHandler] = useState('');
  const [language, languageHandler] = useState('');
  const [director, directorHandler] = useState('');
  const [imdb, imdbHandler] = useState('');
  const [score, scoreHandler] = useState('');
  const [subtitle, subtitleHandler] = useState('');

  const movieHandler = (item) => {
    idHandler(item.id);
    titleHandler(item.title);
    sinopsisHandler(item.sinopsis);
    genderHandler(item.gender);
    launchDateHandler(item.launchDate);
    languageHandler(item.language);
    directorHandler(item.director);
    imdbHandler(item.imdb);
    scoreHandler(item.score);
    subtitleHandler(item.subtitle);
  }

  const movieFormHandler = (e) => {
    e.preventDefault();
    let newMovie = {
      id,
      title,
      sinopsis,
      gender,
      launchDate,
      language,
      director,
      imdb,
      score,
      subtitle
    };
    let newMovieList = movieList.filter((movie) => movie.id !== newMovie.id);
    newMovieList.push(newMovie);
    dispatch(actionCreators.initEditingMovie(newMovieList, newMovie));
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
              value={title}
              required={true}
              fnc={(e) => titleHandler(e)}
              name="Titulo"
            />
          </div>
          <div className="editMovieForm__formBody__form__sinopsis">
            <TextInputGroup
              value={sinopsis}
              required={true}
              fnc={(e) => sinopsisHandler(e)}
              name="Sinopse"
            />
          </div>
          <div className="editMovieForm__formBody__form__gender">
            <TextInputGroup
              value={gender}
              required={true}
              fnc={(e) => genderHandler(e)}
              name="Genero"
            />
          </div>
          <div className="editMovieForm__formBody__form__launch">
            <NumberInputGroup
              value={launchDate}
              fnc={(e) => launchDateHandler(e)}
              name="Ano lançamento"
            />
          </div>
          <div className="editMovieForm__formBody__form__language">
            <TextInputGroup
              value={language}
              required={true}
              fnc={(e) => languageHandler(e)}
              width="120px"
              name="Idioma"
            />
            <TextInputGroup
              value={director}
              fnc={(e) => directorHandler(e)}
              width="120px"
              name="Diretor"
            />
          </div>
          <div className="editMovieForm__formBody__form__imdb">
            <TextInputGroup
              value={imdb}
              fnc={(e) => imdbHandler(e)}
              name="IMDB Link"
            />
          </div>
          <div className="editMovieForm__formBody__form__score">
            <TextInputGroup
              value={score}
              fnc={(e) => scoreHandler(e)}
              name="Avaliação"
            />
          </div>
          <div className="editMovieForm__formBody__form__subtitle">
            <h2 className="editMovieForm__formBody__form__subtitle-h2">
              É legendado? <span>*</span>
            </h2>
            <RadioInputGroup
              defaultChecked={subtitle === true}
              required={true}
              inputName="subtitle"
              name="Sim"
              value={true}
              fnc={(value) => subtitleHandler(value)}
            />
            <RadioInputGroup
              defaultChecked={subtitle === false}
              inputName="subtitle"
              name="Não"
              value={false}
              fnc={(value) => subtitleHandler(value)}
            />
          </div>
          <button
            className="editMovieForm__formBody__form-button"
            type="submit"
          >
            Editar filme
          </button>
        </form>
      </div>
    </div>
  );
}
