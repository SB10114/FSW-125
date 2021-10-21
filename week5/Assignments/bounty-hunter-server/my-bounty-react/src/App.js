import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import BountiesRender from './bountiesRender'
import AddBounty from './Components/AddBounty';
// import DeleteBounty from './Components/DeleteBounty';
// import UpdateBounty from './Components/UpdateBounty';

function App() {

  const [bounties, setBounties] = useState([])
  // const [bounty, addBounties] = useState([])
  // const [bount, killBounties] = useState([])
  // const [boun, removeBounties] = useState([])

  function getBounties() {
    axios.get('/bounties')
      .then(res => setBounties(res.data))
      .catch(err => console.log(err))
  }

  function addBounty(bounty) {
    //console.log('bounty: ', bounty)
    axios.post('/bounties')
    .then(res => setBounties(res.data))
    .catch(err => console.log(err))
    // call post method here with axios
    // set bounties in state
  }

  // function deleteBounty() {
  //   axios.delete('/bounties')
  //   .then(res => setBounties(res.data))
  //   .catch(err => console.log(err))
  // }

  // function updateBounty() {
  //   axios.put('/bounties')
  //   .then(res => setBounties(res.data))
  //   .catch(err => console.log(err))
  // }

  useEffect(() => {
    getBounties()
    addBounty()
    // deleteBounty()
    // updateBounty()
  }, [])

  return (
    <div id = 'mapOfBounty'>
      {bounties.map((bounty, index) => 
      <BountiesRender 
          key={index}
          firstName = {bounty.firstName}
          lastName = {bounty.lastName}
          status = {bounty.living}
          bounty = {bounty.bountyAmount}
          allegience = {bounty.type}
          id = {bounty._id}  
          />
      )}
    <>
    <AddBounty submit={addBounty} />
    </>  

    </div>
  );
}

export default App;

