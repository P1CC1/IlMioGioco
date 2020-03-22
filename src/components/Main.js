import React, { Fragment, useState, createRef } from "react";
import ReactDOM from "react-dom";

import Modal from "react-modal";

import { vitaMassima, aggiornaVita } from "../api/gestione_vita";
import { aggiornaLivello } from "../api/gestione_livello";

Modal.setAppElement("#root");

const Main = ({ appState, setAppState }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const onStart = () => {
    setModalIsOpen(true);
  };

  const modalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    }
  };

  const inputNome = createRef();
  const inputClasse = createRef();

  const onContinue = () => {
    if (!inputNome.current.value) return;
    const nome = inputNome.current.value;
    const classe = inputClasse.current.value;
    const livello = 1;
    const newAppState = {
      nome: inputNome.current.value,
      classe: classe,
      vita: vitaMassima(classe, livello),
      livello: livello,
      vita_massima: vitaMassima(classe, livello)
    };
    setAppState(newAppState);
    setModalIsOpen(false);
  };

  const onNextTurn = () => {
    const delta = +1;
    const newAppState = Object.assign({}, appState, {
      livello: aggiornaLivello(appState, delta)
    });
    //console.log(newAppState);
    setAppState(newAppState);
  };

  return (
    <Fragment>
      <button onClick={onStart} disabled={appState.nome}>
        INIZIA
      </button>

      <button onClick={onNextTurn} disabled={!appState.nome}>
        NUOVO TURNO
      </button>

      <Modal
        isOpen={modalIsOpen}
        style={modalStyle}
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={false}
      >
        <div>
          Scegli il tuo nome:
          <input ref={inputNome} type="text"></input>
        </div>
        <div>
          Scegli la tua classe:
          <select ref={inputClasse}>
            <option>Elfo</option>
            <option>Guerriero</option>
            <option>Ladro</option>
            <option>Nano</option>
            <option>Hobbit</option>
          </select>
        </div>
        <div>
          <button onClick={onContinue}>Prosegui</button>
        </div>
      </Modal>
    </Fragment>
  );
};

export default Main;
