import React from "react";
import './styles.scss';

import CloseIcon from '../../../../assets/closeIcon.svg';

export default function CloseButton({fnc}) {
  return (
    <button className="closeButton" onClick={fnc}>
      <img src={CloseIcon} alt="Close Icon" />
    </button>
  );
}
