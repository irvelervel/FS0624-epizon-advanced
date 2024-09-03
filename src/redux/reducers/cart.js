// qui dentro scrivo il reducer per la mia app

import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions'

// anche redux, come lo stato di un singolo componente, ha bisogno di un valore
// iniziale per il suo stato

const initialState = {
  // dovete immaginare di essere GIÀ dentro la fetta "cart"
  content: [], // l'array di libri attualmente nel carrello
  // non ci serve più la proprietà "cart"
  // immaginate di esservi già dentro
}

// = initialState significa che initialState è il valore di DEFAULT di state
// quando initialState sarà undefined (al primo avvio) noi gli diamo il valore iniziale
const cartReducer = (state = initialState, action) => {
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
        content: [...state.content, action.payload], // :D
        //   content: state.cart.content.concat(action.payload), // :D
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        //   content: [
        //     ...state.content.slice(0, action.payload),
        //     ...state.content.slice(action.payload + 1),
        //   ],
        content: state.content.filter((book, i) => i !== action.payload),
        // action.payload è l'indice da rimuovere
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

export default cartReducer
