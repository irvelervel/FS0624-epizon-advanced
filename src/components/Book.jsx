import { Card } from 'react-bootstrap'

const Book = ({ book, changeBook, bookSelected }) => (
  // il ? dopo bookSelected evita di leggere la proprietà ".id" sul suo valore
  // iniziale, che sarebbe "null"
  // questo ? viene chiamato in gergo "OPTIONAL CHAINING"
  <Card
    className={bookSelected?.id === book.id ? 'custom-border mt-3' : 'mt-3'}
    onClick={() => changeBook(book)}
    style={{ cursor: 'pointer' }}
  >
    <Card.Body className="d-flex">
      <img className="book-image" src={book.imageUrl} alt="book cover" />
      <div>
        <Card.Text className="fw-bold">{book.title}</Card.Text>
        <p>{book.price}$</p>
      </div>
    </Card.Body>
  </Card>
)

export default Book
