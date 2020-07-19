import React from "react";
import "./styles.scss";

import Modal from "../Modal";

export default function ConfirmRemoveModal({
  title,
  director,
  show,
  close,
}) {
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
        <h2 className="removeModal-title">{title}</h2>
        <h2 className="removeModal-director">{director}</h2>
      </div>
    </Modal>
  );
}
