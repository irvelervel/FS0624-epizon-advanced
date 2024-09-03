import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { setUsernameAction } from '../redux/actions'

// per fare in modo che CartIndicator rifletta sempre la vera lunghezza
// dell'array cart.content, dobbiamo fornire a CartIndicator accesso
// allo store di Redux!

// ogni componente della nostra applicazione è collegabile direttamente
// allo store di Redux

// vogliamo collegare CartIndicator in modalità "lettura", per leggere
// la lunghezza del carrello
// per fare ciò utilizziamo un Hook di react-redux -> useSelector()

const CartIndicator = () => {
  const navigate = useNavigate()
  const arrayOfBooksInTheCart = useSelector((store) => {
    // store è TUTTO lo stato di Redux
    return store.cart.content // array del carrello
  })

  // mi prelevo dal Redux Store il valore di store.user.name
  const username = useSelector((store) => {
    return store.user.name // il nome inserito nel login, che parte come ''
  })

  const dispatch = useDispatch()

  const [name, setName] = useState('')
  // salvo comunque il valore dell'input in locale

  return (
    <div className="d-flex justify-content-end align-items-center my-4">
      {username ? (
        <>
          <span>Ciao, {username}!</span>
          <Button
            onClick={() => navigate('/cart')}
            className="d-flex align-items-center ms-3"
          >
            <FaShoppingCart />
            <span className="ms-2">{arrayOfBooksInTheCart.length}</span>
          </Button>
        </>
      ) : (
        <Form
          onSubmit={
            // alla pressione del tasto invio il form viene inviato
            // quello che deve succedere è il DISPATCH di una action!
            // voglio utilizzare il contenuto dell'input field come nuovo valore di
            // state.user.name
            (e) => {
              e.preventDefault()
              dispatch(setUsernameAction(name)) // dispatcho l'action creator
              // passando come parametro il valore dell'input
              // questo parametro diventerà il PAYLOAD della action di tipo
              // "SET_USERNAME"
            }
          }
        >
          {/* l'input deve ovviamente essere controllato, con value + onChange */}
          <Form.Control
            type="text"
            placeholder="fai il login"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form>
      )}
    </div>
  )
}

export default CartIndicator
