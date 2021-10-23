const express = require('express')
const picRouter = express.Router()
const {v4: uuidv4} = require('uuid');
const { default: ImagesArray } = require('./capstone-app/Components/ImageRender');


let displayItems = [
 ImagesArray()
];

picRouter 
    .get('/', (req, res, next) => {
        res.send(displayItems)
    })//GET all

    .get('/:displayId', (req, res) => {
        const displayId = req.params.displayId
        const singularItem = displayItems.find(displayItems => displayItems._id === displayId)

        res.send(singularItem)
    })//GET one

    .post('/', (req, res) => {
        const newImage = req.body
        newImage._id = uuidv4()
        displayItems.push(newImage)

        console.log(displayItems)
        res.send(`Successfully added ${newImage._id} to the database`)
    })//POST one

    .delete('/:displayId', (req, res) => {
        const displayId = req.params.displayId
        const imageIndex = displayItems.findIndex(displayItems => displayItems._id === displayId)
        displayItems.splice(imageIndex, 1)

        res.send(`Resource successfully deleted`)
    })//DELETE one

    .put('/:displayId', (req, res) => {
        const displayId = req.params.displayId
        const imageIndex = displayItems.findIndex(displayItems => displayItems._id === displayId)
        
        Object.assign(displayId[imageIndex], req.body)

        res.send(`Resource sucessfully updated`)
    })//PUT one

    module.exports = picRouter;
