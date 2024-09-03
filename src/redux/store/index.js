// qui dentro inizializziamo lo store di redux

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from '../reducers/cart'
import userReducer from '../reducers/user'
// il fatto che il file dentro la cartella reducers si chiami proprio "index.js"
// semplifica l'import, perchè si può omettere

// ri-creiamo la TORTA
const bigReducer = combineReducers({
  cart: cartReducer, // questi sono i "nomi" delle fette
  user: userReducer,
})

const store = configureStore({
  reducer: bigReducer, // qui ci va il reducer
})

export default store
