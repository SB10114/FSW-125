const express = require('express')
const morgan = require('morgan')
const {v4: uuidv4} = require('uuid')


const app = express()
const PORT = 9000

app.use(express.json()) //for parsing application/json
app.use(morgan('dev'))

const todoRouter = require('./todoRouter')

app.use('/todoItems', todoRouter)

app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
});