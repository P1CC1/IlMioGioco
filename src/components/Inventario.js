import React, { Fragment, useState, createRef } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Inventario = ({
  appState,
  setAppState,
  inventoryState,
  setInventoryState
}) => {
  const [modal1IsOpen, setModal1IsOpen] = useState(false);
  const [modal2IsOpen, setModal2IsOpen] = useState(false);
  const [modal3IsOpen, setModal3IsOpen] = useState(false);
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

  const modalEquipment = () => {
    setModal1IsOpen(true);
  };

  const modalWearable = () => {
    setModal2IsOpen(true);
  };

  const modalBackpack = () => {
    setModal3IsOpen(true);
  };
  const closeModal = () => {
    setModal1IsOpen(false);
    setModal2IsOpen(false);
    setModal3IsOpen(false);
  };

  return (
    <Fragment>
      <button onClick={modalEquipment} disabled={!appState.nome}>
        EQUIPAGGIAMENTO
      </button>
      <button onClick={modalWearable} disabled={!appState.nome}>
        INDOSSABILI
      </button>
      <button onClick={modalBackpack} disabled={!appState.nome}>
        ZAINO
      </button>

      <Modal
        isOpen={modal1IsOpen}
        style={modalStyle}
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={false}
      >
        <button onClick={closeModal}>FATTO</button>
      </Modal>
      <Modal
        isOpen={modal2IsOpen}
        style={modalStyle}
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={false}
      >
        <button onClick={closeModal}>FATTO</button>
      </Modal>
      <Modal
        isOpen={modal3IsOpen}
        style={modalStyle}
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={false}
      >
        <button onClick={closeModal}>FATTO</button>
      </Modal>
    </Fragment>
  );
};
export default Inventario;
