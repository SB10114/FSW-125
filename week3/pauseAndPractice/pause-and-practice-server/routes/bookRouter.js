const express = require('express')
const bookRouter = express.Router()
const {v4: uuidv4} = require('uuid')

//"fake data"
let bookies = [
    {title: 'Devil and the White City', author: 'Erik Larson', genre: '', _id: uuidv4() },
    {title: 'Le Transparenceige', author: 'Jaques Lob', genre: '', _id: uuidv4() },
    {title: 'American Gods', author: 'Neil Gaiman', genre: '', _id: uuidv4() },
    {title: 'Active Imagination', author: 'Carl Jung', genre: '', _id: uuidv4() },
];

//post to add new resource to our collection
bookRouter
    .get('/', (req, res) => {
        res.send(bookies)
})//GET all 

    .post('/', (req, res) => {
        const newBook = req.body
        newBook._id = uuidv4()
        bookies.push(newBook)

        console.log(bookies)
        res.send(`Successfully added ${newBook.title} to the database`)
});//POST one


module.exports = bookRouter;