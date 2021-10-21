import React, { useState } from 'react'

function AddBounty(props) {

    const initInputs = {
        firstName: props.firstName || '',
        lastName: props.lastName || '',
        status: props.living || '',
        bounty: props.bountyAmount || '',
        allegience: props.type
    }

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()

        props.submit(inputs)
        setInputs(initInputs)
    }
    const styles = {
        padding: '50px',
    }
    return (
       
        <form style = {styles} onSubmit={handleSubmit}>
            <input 
                type='text'
                name='firstName'
                value={inputs.firstName}
                onChange={handleChange}
                placeholder='First Name: ' />
            
                <input 
                type='text'
                name='lastName'
                value={inputs.lastName}
                onChange={handleChange}
                placeholder='Last Name: ' />

                <input 
                type='text'
                name='status'
                value={inputs.status}
                onChange={handleChange}
                placeholder='Life Status: ' />

                <input 
                type='text'
                name='bounty'
                value={inputs.bounty}
                onChange={handleChange}
                placeholder='Bounty Amount: ' />

                <input 
                type='text'
                name='allegience'
                value={inputs.allegience}
                onChange={handleChange}
                placeholder='Allegience: ' />

            <button>Add Bounty</button>
        </form>
    )
}


export default AddBounty;