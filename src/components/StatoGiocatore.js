import React, { Fragment, useState, createRef } from "react";
import ReactDOM from "react-dom";

import { vitaMassima } from "../api/gestione_vita";

const StatoGiocatore = ({ appState }) => {
  return (
    <Fragment>
      <div>Nome: {appState.nome}</div>
      <div>Classe: {appState.classe}</div>
      <div>Livello: {appState.livello}</div>
      <div>VitaMassima: {vitaMassima(appState.classe, appState.livello)} </div>
      <div>Vita: {appState.vita}</div>
    </Fragment>
  );
};

export default StatoGiocatore;
