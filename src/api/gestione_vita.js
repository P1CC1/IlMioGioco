export function vitaMassima(classe, livello) {
  if (!classe || !livello) return;

  let costanteClasse = 10;
  switch (classe) {
    case "Elfo":
      costanteClasse = 15;
      break;
    case "Guerriero":
      costanteClasse = 20;
      break;
    case "Ladro":
      costanteClasse = 10;
      break;
    case "Nano":
      costanteClasse = 30;
      break;
    case "Hobbit":
      costanteClasse = 7;
  }
  const vitaMassima = costanteClasse + ((livello-1)*(Math.round(costanteClasse/5)));
  //console.log("costanteclasse " + costanteClasse);
  //console.log("classe " + classe);
  return vitaMassima;
}

export function aggiornaVita(appState, delta) {
  const nuovaVita = appState.vita + delta;
  const vitaMinima = 0;
  if (nuovaVita > vitaMassima(appState.classe, appState.livello)) {
    return vitaMassima(appState.classe, appState.livello);
  } else if (nuovaVita < vitaMinima) {
    return vitaMinima;
  } else {
    return nuovaVita;
  }
}
