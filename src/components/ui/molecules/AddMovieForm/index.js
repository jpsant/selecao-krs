import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actionCreators from "../../../../store/actions/actionCreators";
import uniqid from "uniqid";
import "./styles.scss";

import CloseButton from "../../atoms/CloseButton";
import TextInputGroup from "../../molecules/TextInputGroup";
import NumberInputGroup from "../../molecules/NumberInputGroup";
import RadioInputGroup from "../../molecules/RadioInputGroup";

export default function AddMovieForm({ show, close }) {
  const movieList = useSelector((state) => state.movieList);
  const dispatch = useDispatch();

  const [id, idHandler] = useState(uniqid());
  const [title, titleHandler] = useState('');
  const [sinopsis, sinopsisHandler] = useState('');
  const [gender, genderHandler] = useState('');
  const [launchDate, launchDateHandler] = useState('');
  const [language, languageHandler] = useState('');
  const [director, directorHandler] = useState('');
  const [imdb, imdbHandler] = useState('');
  const [score, scoreHandler] = useState('');
  const [subtitle, subtitleHandler] = useState(false);

  useEffect(() => {
    idHandler(uniqid());
    titleHandler('');
    sinopsisHandler('');
    genderHandler('');
    launchDateHandler('');
    languageHandler('');
    directorHandler('');
    imdbHandler('');
    scoreHandler('');
    subtitleHandler(false);
  }, [show])

  const movieFormHandler = (e) => {
    e.preventDefault();
    let newMovie = returnMovie();
    let newMovieList = [...movieList, newMovie];
    dispatch(actionCreators.initAddingMovie(newMovieList, newMovie));
  };

  const returnMovie = () => {
    return {
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
    }
  }

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
              value={title}
              required={true}
              fnc={(e) => titleHandler(e)}
              name="Titulo"
            />
          </div>
          <div className="addMovieForm__formBody__form__sinopsis">
            <TextInputGroup
              value={sinopsis}
              required={true}
              fnc={(e) => sinopsisHandler(e)}
              name="Sinopse"
            />
          </div>
          <div className="addMovieForm__formBody__form__gender">
            <TextInputGroup
              value={gender}
              required={true}
              fnc={(e) => genderHandler(e)}
              name="Genero"
            />
          </div>
          <div className="addMovieForm__formBody__form__launch">
            <NumberInputGroup
              value={launchDate}
              fnc={(e) => launchDateHandler(e)}
              name="Ano de lançamento"
            />
          </div>
          <div className="addMovieForm__formBody__form__language">
            <TextInputGroup
              value={language}
              required={true}
              fnc={(e) => languageHandler(e)}
              name="Idioma"
            />
            <TextInputGroup
              value={director}
              fnc={(e) => directorHandler(e)}
              name="Diretor"
            />
          </div>
          <div className="addMovieForm__formBody__form__imdb">
            <TextInputGroup
              value={imdb}
              fnc={(e) => imdbHandler(e,)}
              name="IMDB Link"
            />
          </div>
          <div className="addMovieForm__formBody__form__score">
            <TextInputGroup
              value={score}
              fnc={(e) => scoreHandler(e)}
              name="Avaliação"
            />
          </div>
          <div className="addMovieForm__formBody__form__subtitle">
            <h2 className="addMovieForm__formBody__form__subtitle-h2">
              É legendado? <span>*</span>
            </h2>
            <RadioInputGroup
              required={true}
              defaultChecked={subtitle === true}
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
          <button className="addMovieForm__formBody__form-button" type="submit">
            Cadastrar filme
          </button>
        </form>
      </div>
    </div>
  );
}
