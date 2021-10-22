import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import BountiesRender from './bountiesRender'
import AddBounty from './Components/AddBounty';



function App() {

  const [bounties, setBounties] = useState([])

  function getBounties() {
    axios.get('/bounties')
      .then(res => {setBounties(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  function addBounty(updates, id) {
    updates.living = (updates.living === "alive" ? true : false)  

    axios.post(`bounties/${id}`, updates)
    .then(res => setBounties())
    .catch(err => console.log(err))
  }

  function deleteBounty(id) {
    axios.delete(`bounties/${id}`)
    .then(res => getBounties())
    .catch(err => console.log(err))
  }

  function updateBounty(id, updates) {
    updates.living = (updates.living === "alive" ? true : false) 
    axios.put(`bounties/${id}`, updates)
    .then(res => getBounties())
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getBounties()
  }, [])

  return (
  <div>
    <div>
      <AddBounty submit={addBounty} />
  </div>
   
  <div id = 'mapOfBounty'>
      {bounties.map((bounty, index) => 
      <BountiesRender 
          key={index}
          firstName = {bounty.firstName}
          lastName = {bounty.lastName}
          status = {bounty.living}
          bounty = {bounty.bountyAmount}
          type = {bounty.type}
          id = {bounty._id} 
          deleteBounty = {deleteBounty} 
          updateBounty = {updateBounty}
          />
      )}
    </div>
  </div>
  );
}

export default App;

