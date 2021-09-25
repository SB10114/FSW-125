const express = require('express')
const bountyRouter = express.Router()
const {v4: uuidv4}= require('uuid')

const bounties = [
    {firstName: 'Laars', lastName: 'Einreich', living: true, bountyAmount: 10000, type: 'Jedi', _id: uuidv4()},
    {firstName: 'Virginia', lastName: 'Scaars', living: false, bountyAmount: 5000, type: 'Sith', _id: uuidv4()},
    {firstName: 'Uginny', lastName: 'Alambrha', living: true, bountyAmount: 50000, type: 'Sith', _id: uuidv4()},
    {firstName: 'Gandra', lastName: 'Ulric', living: true, bountyAmount: 100000, type: 'Jedi', _id: uuidv4()},
];

bountyRouter
    .get('/', (req, res) => {
        res.send(bounties)
    })

    .post('/', (req, res) => {
        const newBounties = req.body
        newBounties._id = uuidv4()
        bounties.push(newBounties)

        console.log(bounties)
        res.send(`Successfully added ${newBounties.lastName} to the database`)
    })

    .delete('/:bountiesId', (req, res) => {
        const bountiesId = req.params.bountiesId
        const bountiesIndex = bounties.findIndex(bounties => bounties._id === bountiesId)
        bounties.splice(bountiesIndex, 1)

        res.send(`Resource successfully deleted`)
    })

    .put('/:bountiesId', (req, res) => {
        const bountiesId = req.params.bountiesId
        const bountiesIndex = bounties.findIndex(bounties => bounties._id === bountiesId)
        
        Object.assign(bounties[bountiesIndex], req.body)

        res.send(`Resource sucessfully updated`)
    });

module.exports =  bountyRouter;