export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const SET_USERNAME = 'SET_USERNAME'
export const GET_BOOKS = 'GET_BOOKS'

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

// facciamo un action creator "speciale" in cui possiamo gestire op. asincrone
export const asyncReduxActionCreator = () => {
  return (dispatch, getState) => {
    // perchè qui dentro ora posso fare la mia fetch!
    // ... (ad es. una fetch)
    // ...
    // una volta recuperato il dato da es. una fetch, poi usate il parametro
    // dispatch per dispatchare una action
    // il secondo parametro, getState(), è una funzione che se invocata
    // vi permette di ottenere qui dentro lo stato corrente

    // es. in cui aggiungete un libro al cart solo se il carrello
    // ha MENO di 10 elementi
    if (getState().cart.content.length < 10) {
      dispatch({
        type: 'ADD_TO_CART',
        payload: {},
      })
    }
  }
}

// creo l'action creator per recuperare l'array di libri dalle API
// e salvarlo nel Redux Store (in particolare nella fetta "book" alla voce "available")
export const getBooksAction = () => {
  return (dispatch, getState) => {
    // questa funzione interna può gestire operazioni asincrone
    fetch('https://striveschool-api.herokuapp.com/food-books')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('errore nel recupero dei libri')
        }
      })
      .then((arrayOfBooks) => {
        // arrayOfBooks è l'array dei libri! dobbiamo salvarlo in Redux...
        dispatch({
          type: GET_BOOKS,
          payload: arrayOfBooks,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
