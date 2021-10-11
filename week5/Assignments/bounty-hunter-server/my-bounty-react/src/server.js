const express = require('express')
const app = express()
const {v4: uuidv4}= require('uuid')
const PORT = 9000

const bountyRouter = require('./bountyRouter')

app.use(express.json())

app.use('/bounties', bountyRouter)


app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
});