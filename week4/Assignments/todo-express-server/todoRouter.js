const express = require('express')
const todoRouter = express.Router()
const {v4: uuidv4} = require('uuid')


let todoItems = [
    {name: 'Do laundry', description: 'Wash, dry, and fold laundry.', imageurl: 'https://cf.ltkcdn.net/cleaning/images/orig/257114-1600x1030-how-properly-do-laundry.jpg', completed: true, _id: uuidv4()},
    {name: 'Walk the dog', description: 'Take the pup for a 30 minute walk.', imageurl: 'https://i.cbc.ca/1.5692650.1597871051!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/1342380161.jpg', completed: false, _id: uuidv4()},
    {name: 'Wash the dishes', description: 'Wash, dry, and put away the dishes.', imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrcbeHiQ9efseFfIGFlvO33SmCxp4xMbx1Qg&usqp=CAU', completed: true, _id: uuidv4()},
    {name: 'Vaccum the floors', description: 'Put down deoderizing powder and vacuum carpets.', imageurl: 'https://homevacuumzone.com/wp-content/uploads/2016/05/7515577_web-1000x640.jpg', completed: true, _id: uuidv4()},
];

todoRouter 
    .get('/', (req, res, next) => {
        res.send(todoItems)
    })//GET all

    .get('/:todoId', (req, res) => {
        const todoId = req.params.todoId
        const singulartodo = todoItems.find(todoItems => todoItems._id === todoId)

        res.send(singulartodo)
    })//GET one

    .post('/', (req, res) => {
        const newTodo = req.body
        newTodo._id = uuidv4()
        todoItems.push(newTodo)

        console.log(todoItems)
        res.send(`Successfully added ${newTodo._id} to the database`)
    })//POST one

    .delete('/:todoId', (req, res) => {
        const todoId = req.params.todoId
        const todoIndex = todoItems.findIndex(todoItems => todoItems._id === todoId)
        todoItems.splice(todoIndex, 1)

        res.send(`Resource successfully deleted`)
    })//DELETE one

    .put('/:todoId', (req, res) => {
        const todoId = req.params.todoId
        const todoIndex = todoItems.findIndex(todoItems => todoItems._id === todoId)
        
        Object.assign(todoId[todoIndex], req.body)

        res.send(`Resource sucessfully updated`)
    })//PUT one

    module.exports = todoRouter;
