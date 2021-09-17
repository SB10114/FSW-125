const express = require('express')
const app = express()
const port = 3000

app.get('/userData', (req, res) => {
    res.send({
        name: 'susie',
        place: 'alabama',
        age: 42
    })
})

app.get('/pets', (req, res) => {
    res.send({
    name: 'Missy',
    species: 'cat',
    temperament: 'bossy'
    })
})

app.get('/songs', (req, res) => {
    res.send({
    name: 'Sweater Weather',
    artist: 'The neighborhood',
    genre: 'Indie, alt rock',
    release: 2013
    })
})


app.listen(port, () => {
    console.log(`This is my start message. App started on port: ${port}`)
})

