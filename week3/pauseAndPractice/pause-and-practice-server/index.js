const express = require('express')
const app = express()
//uuid
const {v4: uuidv4} = require('uuid')

const bookRouter = require('./routes/bookRouter')
const tvShowRouter = require('./routes/tvShowRouter')

const PORT = 3000


//application level middelware
app.use(express.json()) //for parsing application/json

//routes
app.use('/bookies', bookRouter)
app.use('/tvShows', tvShowRouter)


//Server startup logic
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
});