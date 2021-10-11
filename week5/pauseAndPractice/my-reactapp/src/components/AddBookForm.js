import { useState } from 'react'

function AddBookForm({addBook}) {
    const initialInputs = { title: '', genre: ''}
    const [inputs, setInputs] = useState(initialInputs)

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(inputs)
        setInputs(initialInputs)
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input 
                type = 'text'
                name = 'title'
                value = {inputs.title}
                onChange = {handleChange}
                placeholder = 'Title' />

            <input 
                type = 'text'
                name = 'genre'
                value = {inputs.genre}
                onChange = {handleChange}
                placeholder = 'Genre' />  

                <button>Add Book</button>  
        </form>
    )
}

export default AddBookForm;