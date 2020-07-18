import React, { useState } from "react";
import "./styles.scss";

import AddButton from "../../atoms/AddButton";
import Backdrop from "../../atoms/Backdrop";
import MovieCard from "../../molecules/MovieCard";
import ConfirmRemoveModal from "../../molecules/ConfirmRemoveModal";
import AddMovieForm from "../../molecules/AddMovieForm";
import EditMovieForm from "../../molecules/EditMovieForm";

export default function CardsContainer() {
  const [showModal, showModalHandler] = useState(false);
  const [modalType, modalTypeHandler] = useState("");

  const deleteModalHandler = () => {
    showModalHandler(!showModal);
    modalTypeHandler("delete");
  };

  const editModalHandler = () => {
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
          <MovieCard
            deleteModal={deleteModalHandler}
            editModal={editModalHandler}
          />
        </div>
      </div>
    </>
  );
}
