// qui dentro inizializziamo lo store di redux

import { configureStore } from '@reduxjs/toolkit'
import mainReducer from '../reducers'
// il fatto che il file dentro la cartella reducers si chiami proprio "index.js"
// semplifica l'import, perchè si può omettere

const store = configureStore({
  reducer: mainReducer, // qui ci va il reducer
})

export default store
