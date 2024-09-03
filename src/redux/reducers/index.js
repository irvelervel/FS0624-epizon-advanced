// qui dentro scrivo il reducer per la mia app

import { ADD_TO_CART, REMOVE_FROM_CART, SET_USERNAME } from '../actions'

// anche redux, come lo stato di un singolo componente, ha bisogno di un valore
// iniziale per il suo stato

const initialState = {
  // cercate di organizzare il vostro stato di redux in "slices"
  // ovvero sotto-oggetti
  cart: {
    content: [], // l'array di libri attualmente nel carrello
  },

  // una nuova "slice" (fetta)
  user: {
    name: '',
  },
}

// = initialState significa che initialState è il valore di DEFAULT di state
// quando initialState sarà undefined (al primo avvio) noi gli diamo il valore iniziale
const mainReducer = (state = initialState, action) => {
  // parametro 1 -> state è lo stato corrente di redux
  // parametro 2 -> action è l'azione che è stata appena "dispatchata"
  //
  // ora il cuore del reducer: lo switch-case
  switch (action.type) {
    // qui vanno i case

    case ADD_TO_CART:
      return {
        // ritorno anche da qui SEMPRE il nuovo stato di redux
        // devo ritornare un nuovo oggetto, la nuova "biglia",
        // con dentro un libro in più nel carrello
        //
        // state.cart.content.push(action.payload) <-- V I E T A T O
        // non possiamo modificare lo state da cui partiamo
        ...state, // si assicura di portare dentro anche la fetta "user"
        cart: {
          ...state.cart,
          content: [...state.cart.content, action.payload], // :D
          //   content: state.cart.content.concat(action.payload), // :D
        },
      }

    case REMOVE_FROM_CART:
      return {
        ...state, // si assicura di portare dentro anche la fetta "user"
        cart: {
          ...state.cart,
          //   content: [
          //     ...state.cart.content.slice(0, action.payload),
          //     ...state.cart.content.slice(action.payload + 1),
          //   ],
          content: state.cart.content.filter((book, i) => i !== action.payload),
          // action.payload è l'indice da rimuovere
        },
      }

    case SET_USERNAME:
      return {
        ...state, // in questo modo non ci perdiamo il cart
        user: {
          ...state.user,
          name: action.payload, // in questo caso è semplicemente una stringa,
          // la posso usare come NUOVO valore di name
        },
      }

    default: {
      // il default cattura tutti i casi che NON sono rientrati
      // nei precedenti switch case

      // TUTTI gli switch case del mio mainReducer hanno UN solo scopo:
      // RITORNARE il nuovo stato di redux
      return state
      // worst-case-scenario: ritorno lo stato senza alterarlo
    }
  }
}

export default mainReducer
