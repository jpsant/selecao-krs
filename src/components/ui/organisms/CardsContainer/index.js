import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actionCreators from '../../../../store/actions/actionCreators';
import "./styles.scss";

import AddButton from "../../atoms/AddButton";
import Backdrop from "../../atoms/Backdrop";
import MovieCard from "../../molecules/MovieCard";
import ConfirmRemoveModal from "../../molecules/ConfirmRemoveModal";
import AddMovieForm from "../../molecules/AddMovieForm";
import EditMovieForm from "../../molecules/EditMovieForm";

export default function CardsContainer() {
  const dispatch = useDispatch();
  const movieList = useSelector(state => state.movieList);

  const [showModal, showModalHandler] = useState(true);
  const [modalType, modalTypeHandler] = useState("delete");
  const [selectedItem, selectedItemHandler] = useState({});

  useEffect(() => {
    dispatch(actionCreators.initRetrievingMovieList());
  }, []);

  const deleteModalHandler = (movie) => {
    showModalHandler(!showModal);
    modalTypeHandler("delete");
    selectedItemHandler(movie);
  };

  const editModalHandler = (movie) => {
    showModalHandler(!showModal);
    modalTypeHandler("edit");
  };

  const addModalHandler = () => {
    showModalHandler(!showModal);
    modalTypeHandler("add");
  };

  const closeModalHandler = () => {
    showModalHandler(false);
    modalTypeHandler("");
  };

  return (
    <>
      <ConfirmRemoveModal
        item={selectedItem}
        show={modalType === "delete"}
        close={closeModalHandler}
      />
      <EditMovieForm show={modalType === "edit"} close={closeModalHandler} />
      <AddMovieForm show={modalType === "add"} close={closeModalHandler} />
      <Backdrop show={showModal} toggle={closeModalHandler} />
      <div className="cardsContainer">
        <div className="cardsContainer__input">
          <h1>Lista de filmes</h1>
          <AddButton fnc={addModalHandler} />
        </div>
        <div className="cardsContainer__cards">
          {movieList.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              deleteModal={() => deleteModalHandler(movie)}
              editModal={() => editModalHandler(movie)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
