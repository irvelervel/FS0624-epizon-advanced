import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style/index.css'

import store from './redux/store'
import { Provider } from 'react-redux'
// Provider è un COMPONENTE! Serve a iniettare redux dentro la nostra applicazione React

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // Provider ha bisogno di una prop chiamata "store"
  // gli diamo come valore l'oggetto store che abbiamo esportato da redux/store
  <Provider store={store}>
    <App />
  </Provider>
)
