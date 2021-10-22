import React, {useState} from 'react'

function DeleteBounty (props) {
    const [id, setId] = useState(props.id)


    function handleSubmit(e) {
        e.preventDefault()

        props.submit(id)
        setId()
    }

    return (
        <form onSubmit={handleSubmit}>
            <button>Delete</button>
        </form>
    )
}

export default DeleteBounty;