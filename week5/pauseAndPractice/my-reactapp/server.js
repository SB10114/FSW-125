const express = require('express')
const morgan = require('morgan')
//uuid
const {v4: uuidv4} = require('uuid')

const bookRouter = require('./routes/bookRouter')
const tvShowRouter = require('./routes/tvShowRouter')

const app = express()
const PORT = 9000

//application level middleware
app.use(express.json()) //for parsing application/json
app.use(morgan('dev'))

//routes
app.use('/books', bookRouter)
app.use('/tvShows', tvShowRouter)


//Server startup logic
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
});