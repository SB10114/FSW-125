const express = require('express')
const bookRouter = express.Router()
const {v4: uuidv4} = require('uuid');


let seriesInfo = [
    {seriesTitle: "Lord of The Rings", author: "J.R.R Tolkien", numberOfBooks: 4, readAll: false, bookTitles: ['The Hobbit, \n', 'The Fellowship of The ring, \n', 'The Two Towers, \n', 'The Return of The King.'], _id: uuidv4()},
    {seriesTitle: "A Court of Thorns and Roses", author: "Sara J. Maas", numberOfBooks: 4, readAll: true, bookTitles: ['A Court of Thorns and Roses, \n', 'A Court of Mist and Fury, \n', 'A Court of Wings and Ruin, \n', 'A Court of Silver Flames.'], _id: uuidv4()},
    {seriesTitle: "The Echo Trilogy", author: "Lindsey Fairleigh and Lindsey Sparks", numberOfBooks: 3, readAll: true, bookTitles: ['Echo in Time, \n', 'Time Anomoly, \n', 'Ricochet Through Time.'], _id: uuidv4()},
    {seriesTitle: "The Dreamland Series", author: "E.J Mellow", numberOfBooks: 3, readAll: false, bookTitles: ['The dreamer, \n', 'The Divide, \n', 'The Destined.'], _id: uuidv4()}
];

bookRouter 
    .get('/', (req, res, next) => {
        res.status(200).send(seriesInfo)
    })//GET all

    .get('/:displayId', (req, res) => {
        const displayId = req.params.displayId
        const singularItem = seriesInfo.find(seriesInfo => seriesInfo._id === displayId)

        if (!singularItem) {
            const error = new Error('no books found')
            return next(error)
        }

        res.status(200).send(singularItem)
    })//GET one

    .get('/search/numberOfBooks', (req, res) => {
        const numberOfBooks = req.query.numberOfBooks
        const filteredBooks = seriesInfo.filter(books => {
            console.log(typeof books.numberOfBooks, typeof numberOfBooks)
            return books.numberOfBooks == numberOfBooks})

        res.status(200).send(filteredBooks)
    })//GET by size

    .post('/', (req, res) => {
        if(!req.body){
            res.status(500)
        }

        const newSeries = req.body
        newSeries._id = uuidv4()
        seriesInfo.push(newSeries)

        res.send(newSeries)
        res.status(201).send(`Successfully added ${newSeries._id} to the database`)
    })//POST one

    .delete('/:displayId', (req, res) => {
        const displayId = req.params.displayId
        const seriesIndex = seriesInfo.findIndex(seriesInfo => seriesInfo._id === displayId)
        seriesInfo.splice(seriesIndex, 1)

        res.status(200).send(`Resource successfully deleted`)
    })//DELETE one

    .put('/:displayId', (req, res) => {
        const displayId = req.params.displayId
        const seriesIndex = seriesInfo.findIndex(seriesInfo => seriesInfo._id === displayId)
        
        Object.assign(seriesInfo[seriesIndex], req.body)

        res.status(200).send(`Resource sucessfully updated`)
    })//PUT one


module.exports = bookRouter;
