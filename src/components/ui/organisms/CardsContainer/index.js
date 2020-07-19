import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actionCreators from "../../../../store/actions/actionCreators";
import "./styles.scss";

import AddButton from "../../atoms/AddButton";
import Backdrop from "../../atoms/Backdrop";
import MovieCard from "../../molecules/MovieCard";
import ConfirmRemoveModal from "../../molecules/ConfirmRemoveModal";
import AddMovieForm from "../../molecules/AddMovieForm";
import EditMovieForm from "../../molecules/EditMovieForm";
import LoadingSpinner from "../../atoms/LoadingSpinner";
import ModalMessage from "../../molecules/ModalMessage";

export default function CardsContainer() {
  const movieList = useSelector((state) => state.movieList);
  const loading = useSelector((state) => state.loading);
  const success = useSelector((state) => state.success);
  const error = useSelector((state) => state.error);

  const [showModal, showModalHandler] = useState(false);
  const [modalType, modalTypeHandler] = useState("");
  const [selectedItem, selectedItemHandler] = useState({});
  const dispatch = useDispatch();

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
    dispatch(actionCreators.closeModalMessage());
  };

  return (
    <>
      <ModalMessage
        message="Operação realizada com sucesso!"
        show={success}
        fnc={closeModalHandler}
      />
      <ModalMessage
        message="Ocorreu um erro em sua requisição"
        show={error}
        fnc={closeModalHandler}
      />
      <LoadingSpinner show={loading} />
      <ConfirmRemoveModal
        item={selectedItem}
        show={modalType === "delete" && !loading && (!success || error)}
        close={closeModalHandler}
      />
      <EditMovieForm
        show={modalType === "edit" && !loading && (!success || error)}
        close={closeModalHandler}
      />
      <AddMovieForm
        show={modalType === "add" && !loading && (!success || error)}
        close={closeModalHandler}
      />
      <Backdrop show={showModal || loading} toggle={closeModalHandler} />
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
