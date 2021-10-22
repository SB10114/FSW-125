import React, {useState} from 'react'

function UpdateBounty(props) {
    const [id, setId] = useState(props.id)

    const initInputs = {
        firstName: props.firstName || '',
        lastName: props.lastName || '',
        living: props.living || '',
        bountyAmount: props.bountyAmount || '',
        type: props.type,
        id: props.id
    }
    
    const [inputs, setInputs] = useState(initInputs)

    function handleSubmit(e) {
        e.preventDefault()

        props.submit(inputs.id, inputs)
        setId(initInputs)
    }
    
    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }


    return(
        <form onSubmit={handleSubmit}>
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
                name='living'
                value={inputs.living}
                onChange={handleChange}
                placeholder='Life Status: ' />

                <input 
                type='text'
                name='bountyAmount'
                value={inputs.bountyAmount}
                onChange={handleChange}
                placeholder='Bounty Amount: ' />

                <input 
                type='text'
                name='type'
                value={inputs.type}
                onChange={handleChange}
                placeholder='Allegiance: ' />


        <button>Update</button>
    </form>
    )
}

export default UpdateBounty;