const express = require('express')
const tvShowRouter = express.Router()
const {v4: uuidv4} = require('uuid')

let tvShows = [
    {title: 'Mr. Mayor', channel: 'TBS', _id: uuidv4()},
    {title: 'Snowpiercer', channel: 'TNT', _id: uuidv4()},
    {title: 'American Gods', channel: 'Starz', _id: uuidv4()},
    {title: 'The Expanse', channel: 'HBO Max', _id: uuidv4()},
];

tvShowRouter
    .get('/', (req, res) => {
        res.send(tvShows)
    })
    .get('/:aShow', (req, res) => {
        const tvShowId = req.params.tvShowId
        const singularShow = tvShows.find(tvShows => tvShows._id === tvShowId)

        res.send(singularShow)
    })
    .get('/search/channel', (req, res) => {
        const tvShowsChannel = req.query.channel
        const filteredShows = tvShows.filter(shows => shows.channel === tvShowsChannel)

        res.send(filteredShows)
    })

    .post('/', (req, res) => {
        const tvShow = req.body
        tvShow._id = uuidv4()
        tvShows.push(tvShow)

        console.log(tvShow)
        res.send(`Successfully added ${tvShow.title} to the database`)
    })
    
    .delete('/:tvShowsId', (req, res) => {
        const tvShowsId = req.params.tvShowsId
        const tvShowsIndex = tvShows.findIndex(tvShows => tvShows._id === tvShowsId)
        tvShows.splice(tvShowsIndex, 1)

        res.send(`Resource successfully deleted`)
    })

    .put('/:tvShowsId', (req, res) => {
        const tvShowsId = req.params.tvShowsId
        const tvShowsIndex = tvShows.findIndex(tvShows => tvShows._id === tvShowsId)
        
        Object.assign(tvShows[tvShowsIndex], req.body)

        res.send(`Resource sucessfully updated`)
    });

module.exports = tvShowRouter;