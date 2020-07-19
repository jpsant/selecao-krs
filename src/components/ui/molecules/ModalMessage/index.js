import React from "react";
import "./styles.scss";

import Modal from "../Modal";
import ConfirmButton from "../../atoms/ConfirmButton";

export default function MessageModal({ fnc, show, message }) {
  return (
    <Modal show={show}>
      <div className="modalMessage">
        <h1 className="modalMessage-h1">{message}</h1>
        <div className="modalMessage__button">
          <ConfirmButton fnc={fnc}>Retornar</ConfirmButton>
        </div>
      </div>
    </Modal>
  );
}
