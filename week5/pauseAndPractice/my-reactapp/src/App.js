import { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

import Book from './components/Book'
import AddBookForm from './components/AddBookForm';

function App() {
  const [books, setBooks] = useState([])

const getBooks = () => {
    axios.get('/books')
      .then(res => setBooks(res.data))
      .catch(err => console.log(err))
  }

const addBook = (newBook) => {
  axios.post('/books', newBook)
    .then(res => {
      setBooks(prevBooks => [...prevBooks, res.data])
    })
    .catch(err => console.log(err))
}

const deleteBook = (bookId) => {
  axios.delete(`/books/${bookId}`)
  .then(res => )
  .catch(err => console.log(err))
}

useEffect(() => {
    getBooks();
  }, []);

const booksList = books.map(book => <Book {...book} deleteBook = {deleteBook} key= {book.title} />)


  return (
    // <div className= 'App'>
    //   Hello Sierra!
    // </div>
    <div className="book-container">
      <AddBookForm addBook= {addBook}/>
      {booksList}
    </div>
  );
}

export default App;
