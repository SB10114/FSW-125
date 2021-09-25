const express = require.apply('express')
const tvShowRouter = express.Router()
const {v4: uuidv4} = require('uuid')

let tvShows = [
    {title: 'Mr. Mayor', channel: 'TBS', _id: uuidv4()},
    {title: 'Snowpiercer', channel: 'TNT', _id: uuidv4()},
    {title: 'American Gods', channel: 'Starz', _id: uuidv4()},
    {title: 'The Expanse', channel: 'HBO Max', _id: uuidv4()},
];

tvShowRouter
    .get('/tv-shows', (req, res) => {
        res.send(tvShows)
})

    .post('/tv-shows', (req, res) => {
        const tvShow = req.body
        tvShow._id = uuidv4()
        tvShows.push(tvShow)

        console.log(tvShow)
        res.send(`Successfully added ${tvShow.title} to the database`)
});

module.exports = tvShowRouter;