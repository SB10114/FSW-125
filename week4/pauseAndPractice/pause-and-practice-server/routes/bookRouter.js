const express = require('express')
const bookRouter = express.Router()
const {v4: uuidv4} = require('uuid')

//"fake data"
let books = [
    {title: 'Devil and the White City', author: 'Erik Larson', genre: 'science fiction', _id: uuidv4() },
    {title: 'Le Transparenceige', author: 'Jaques Lob', genre: 'science fiction', _id: uuidv4() },
    {title: 'American Gods', author: 'Neil Gaiman', genre: 'science fiction', _id: uuidv4() },
    {title: 'Active Imagination', author: 'Carl Jung', genre: 'philosophy', _id: uuidv4() },
];

//post to add new resource to our collection
bookRouter
    .get('/', (req, res) => {
        res.send(books)
    })//GET all 

    .get('/:bookId', (req, res) => {
       const bookId = req.params.bookId
       const singularBook = books.find(book => book._id === bookId)

       res.send(singularBook)
    })//GET one

    .get('/search/genre', (req, res) => {
        const bookGenre = req.query.genre
        const filteredBooks = books.filter(book => book.genre === bookGenre)

        res.send(filteredBooks)
    })//GET some

    .post('/', (req, res) => {
        const newBook = req.body
        newBook._id = uuidv4()
        books.push(newBook)

        console.log(books)
        res.send(`Successfully added ${newBook.title} to the database`)
    })//POST one

    .delete('/:bookId', (req, res) => {
        const bookId = req.params.bookId
        const bookIndex = books.findIndex(book => book._id === bookId)
        books.splice(bookIndex, 1)

        res.send(`Resource successfully deleted`)
    })//DELETE one

    .put('/:bookId', (req, res) => {
        const bookId = req.params.bookId
        const bookIndex = books.findIndex(book => book._id === bookId)
        
        Object.assign(books[bookIndex], req.body)

        res.send(`Resource sucessfully updated`)
    })//PUT one


module.exports = bookRouter;