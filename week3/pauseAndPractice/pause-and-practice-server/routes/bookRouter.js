const express = require.apply('express')
const bookRouter = express.Router()
const {v4: uuidv4} = require('uuid')

//"fake data"
let bookies = [
    {title: 'Devil and the White City', author: 'Erik Larson', _id: uuidv4() },
    {title: 'Le Transparenceige', author: 'Jaques Lob', _id: uuidv4() },
    {title: 'American Gods', author: 'Neil Gaiman', _id: uuidv4() },
    {title: 'Active Imagination', author: 'Carl Jung', _id: uuidv4() },
];

//post to add new resource to our collection
bookRouter
    .get('/', (req, res) => {
        res.send(bookies)
})

    .post('/', (req, res) => {
        const newBook = req.body
        newBook._id = uuidv4()
        bookies.push(newBook)

        console.log(bookies)
        res.send(`Successfully added ${newBook.title} to the database`)
});


module.exports = bookRouter;