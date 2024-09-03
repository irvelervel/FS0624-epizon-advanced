import { GET_BOOKS } from '../actions'

const initialState = {
  available: [],
}

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        available: action.payload, // cioè l'array di libri
      }

    default:
      return state
  }
}

export default bookReducer
