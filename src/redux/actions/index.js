export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const SET_USERNAME = 'SET_USERNAME'

// qui dentro inseriremo le ACTIONS, in modo da poterle riutilizzare
// eventualmente da più componenti

// si salvano dei cosiddetti "action creator" -> una FUNZIONE che ritorna una action

// GENERALIZZIAMO la action ADD_TO_CART
// con questa funzione siamo in grado di dispatchare la action di tipo 'ADD_TO_CART'
// con qualsiasi payload, basterà passarlo come parametro all'invocazione di questa funzione
export const addToCartAction = (bookSelected) => {
  return {
    type: ADD_TO_CART,
    payload: bookSelected, // bookSelected è il libro
    // attualmente visualizzato nel componente
  }
}

export const removeFromCartAction = (i) => {
  return {
    type: REMOVE_FROM_CART,
    payload: i,
  }
}

export const setUsernameAction = (name) => {
  return {
    type: SET_USERNAME,
    payload: name, // il valore corrente dell'input
  }
}
