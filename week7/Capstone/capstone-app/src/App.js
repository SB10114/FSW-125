import axios from 'axios'
import {useState, useEffect} from 'react'
import './App.css';
import AddSeries from './Components/AddSeries';
//import DeleteSeries from './Components/DeleteSeries';
import BookRender from './Components/BookRender';
import UpdateSeries from './Components/UpdateSeries';

function App() {

  const [book, setBook] = useState([])
  const [query, setQuery] = useState({})

  function handleChange(e) {
    const { name, value } = e.target
    setQuery(prevInputs => ({...prevInputs, [name]: value}))
}

  function getBook() {
    axios.get('/seriesInfo')
      .then(res => {setBook(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  function getOneBook() {
    axios.get(`/seriesInfo/search/numberOfBooks?numberOfBooks=${query.query}`)
      .then(res => {setBook(res.data)})
      .catch(err => console.log(err))
  }

  function addSeries(updates) {
    updates.readAll = (updates.readAll === "true" ? true : false)  

    axios.post(`/seriesInfo`, updates)
    .then(res => setBook())
    .catch(err => console.log(err))
  }

  function deleteSeries(id) {
    axios.delete(`/seriesInfo/${id}`)
    .then(res => getBook())
    .catch(err => console.log(err))
  }

  function updateSeries(id, updates) {
    updates.readAll = (updates.readAll === "true" ? true : false) 
   
    axios.put(`/seriesInfo/${id}`, updates)
    .then(res => getBook())
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getBook()
  }, [])

  const styles1 ={
    marginLeft: "542px"
  }
  return (
  <div>
    <div>
      <AddSeries submit={addSeries} />
  </div>
   <form style={styles1}>
     <input  name="query" onChange={handleChange} placeholder= "Enter # in series:"></input>
     <button onClick={getOneBook}>Search by #</button>
   </form>
  <div>
      {book.map((books, index) => 
      <BookRender 
          key={index}
          seriesTitle = {books.seriesTitle}
          author = {books.author}
          readAll = {books.readAll}
          numberOfBooks = {books.numberOfBooks}
          bookTitles = {books.bookTitles}
          id = {books._id} 
          updateSeries = {updateSeries}
          deleteSeries = {deleteSeries} 
          
          />
      )}
    </div>
  </div>
  );
}

export default App;