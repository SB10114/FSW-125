import React, { useState } from 'react'

function AddSeries(props) {

    const initInputs = {
       seriesTitle: props.seriesTitle || '',
       author: props.author || '',
       numberOfBooks: props.numberOfBooks || '',
       readAll: props.readAll || '',
       bookTitles: props.bookTitles || '',
    }

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()

        var newInputs = {...inputs, bookTitles: inputs.bookTitles.split(',')}

        props.submit(newInputs)
        setInputs(initInputs)
    }

    const styles = {
        padding: '50px',
        textAlign: "center"
    }
    return (
       
        <form style = {styles} onSubmit={handleSubmit}>
            <input 
                type="text"
                name="seriesTitle"
                value={inputs.seriesTitle}
                onChange={handleChange}
                placeholder="Enter Series Title:"
                />
            <input 
                type="text"
                name="author"
                value={inputs.author}
                onChange={handleChange}
                placeholder="Enter Series Author:"
                />

            <input 
                type="text"
                name="numberOfBooks"
                value={inputs.numberOfBooks}
                onChange={handleChange}
                placeholder="Number in series:"
                />

            <input 
                type="text"
                name="readAll"
                value={inputs.readAll}
                onChange={handleChange}
                placeholder="Completed series:"
                />

            <input 
                type="text"
                name="bookTitles"
                value={inputs.bookTitles}
                onChange={handleChange}
                placeholder="Book titles: "
                />

            <button>Add Series</button>
        </form>
    )
}


export default AddSeries;