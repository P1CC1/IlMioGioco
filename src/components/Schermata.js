import React, { useState } from "react";
import ReactDOM from "react-dom";

import "../styles/app.css";
import Main from "./Main.js";
import StatoGiocatore from "./StatoGiocatore.js";
import Inventario from "./Inventory/inventario.js";

const Schermata = () => {
  //const [appState, setAppState] = useState({classe: "Guerriero", nome: "Enricos", vita: 5});
  const [appState, setAppState] = useState({});
  const [inventoryState, setInventoryState] = useState({});

  return (
    <div id="schermata">
      <div id="stato-giocatore">
        <StatoGiocatore appState={appState} />
      </div>
      <div id="stato-partita">Stato Partita</div>
      <div id="inventario">
        <Inventario
          appState={appState}
          setAppState={setAppState}
          inventoryState={inventoryState}
          setInventoryState={setInventoryState}
        />
      </div>
      <div id="azioni">Azioni</div>
      <div id="start-next-turn">
        <Main
          appState={appState}
          setAppState={setAppState}
          inventoryState={inventoryState}
          setInventoryState={setInventoryState}
        />
      </div>
    </div>
  );
};

export default Schermata;
