import { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import BookList from './BookList'
import BookDetail from './BookDetail'

const BookStore = () => {
  const [books, setBooks] = useState([])
  const [bookSelected, setBookSelected] = useState(null)

  // componentDidMount
  useEffect(() => {
    getBooks()
  }, [])

  const getBooksThenCatch = () => {
    fetch('https://striveschool-api.herokuapp.com/food-books')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('error fetching books')
        }
      })
      .then((data) => {
        setBooks(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getBooks = async () => {
    try {
      let resp = await fetch(
        'https://striveschool-api.herokuapp.com/food-books'
      )
      if (resp.ok) {
        let fetchedBooks = await resp.json()
        console.log('ARRAY DI LIBRI', fetchedBooks)
        setBooks(fetchedBooks)
      } else {
        console.log('error')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const changeBook = (book) => setBookSelected(book)

  return (
    <Row className="center-row">
      <Col lg={4}>
        <BookList
          bookSelected={bookSelected}
          changeBook={changeBook}
          books={books}
        />
      </Col>
      <Col lg={8}>
        <BookDetail bookSelected={bookSelected} />
      </Col>
    </Row>
  )
}

export default BookStore
