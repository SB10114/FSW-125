const express = require('express')
const morgan = require('morgan')
const {v4: uuidv4} = require('uuid')

const bookRouter = require('./routes/bookRouter')

const app = express()
const PORT = 9000

app.use(express.json()) //for parsing application/json
app.use(morgan('dev'))

app.use('/seriesInfo', bookRouter)

app.use((err, req, res, next) => {
    return res.status(500).send({errmsg: err.message})
});

app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
});