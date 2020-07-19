import React from "react";
import { useDispatch } from "react-redux";
import "./styles.scss";

import Modal from "../Modal";
import ConfirmButton from "../../atoms/ConfirmButton";

export default function ConfirmRemoveModal({ item, show, close }) {
  const dispatch = useDispatch();

  const removeMovieHandler = (item) => {
    console.log(item);
  };

  return (
    <Modal show={show} close={close}>
      <div
        style={{
          visibility: show ? "visible" : "hidden",
          opacity: show ? "1" : "0",
        }}
        className="removeModal"
      >
        <h1 className="removeModal-h1">Remover filme</h1>
        <h2 className="removeModal-h2">
          Deseja realmente remover o filme selecionado do catálogo?
        </h2>
        <h2 className="removeModal-title">
          Título: <span>{item.title}</span>
        </h2>
        <h2 className="removeModal-director">
          Diretor: <span>{item.director}</span>
        </h2>
        <div className="removeModal__button">
          <ConfirmButton fnc={() => removeMovieHandler(item)}>
            Remover
          </ConfirmButton>
        </div>
      </div>
    </Modal>
  );
}
