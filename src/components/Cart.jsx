import { Col, Row, Button } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'

// per "leggere" dal redux store utilizziamo useSelector
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCartAction } from '../redux/actions'

// se la prop "cart" non arriva, invece di assumere il valore "undefined" diventa []
// = [] è il valore di default

const Cart = () => {
  const arrayOfBooksInTheCart = useSelector((store) => store.cart.content)

  // controlliamo i libri disponibili
  const allTheBooks = useSelector((store) => store.book.available)

  const dispatch = useDispatch()

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: 'none' }}>
          {arrayOfBooksInTheCart.map((book, i) => (
            <li key={i} className="my-4">
              <Button
                variant="danger"
                onClick={() => {
                  // questo pulsante ora non fa niente!
                  dispatch(removeFromCartAction(i))
                }}
              >
                <FaTrash />
              </Button>
              <img
                className="book-cover-small"
                src={book.imageUrl}
                alt="book selected"
              />
              {book.title}
            </li>
          ))}
        </ul>
      </Col>
      <Row>
        <Col sm={12} className="fw-bold mb-3 ms-4">
          TOTALE:{' '}
          {arrayOfBooksInTheCart.reduce(
            (acc, currentValue) => acc + parseFloat(currentValue.price),
            0
          )}
          $
        </Col>
      </Row>
      <Row>
        <Col>
          <p>I libri disponibili nel negozio sono {allTheBooks.length}</p>
        </Col>
      </Row>
    </Row>
  )
}

export default Cart
