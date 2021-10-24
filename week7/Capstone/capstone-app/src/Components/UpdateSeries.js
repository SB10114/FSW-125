import React, {useState} from 'react'

function UpdateSeries(props) {
    const [id, setId] = useState(props.id)

    const initInputs = {
        seriesTitle: props.seriesTitle || '',
        author: props.author || '',
        numberOfBooks: props.numberOfBooks || '',
        readAll: props.readAll || '',
        bookTitles: props.bookTitles || '',
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

    const styles = {
        textAlign: "center",
        margin: "10px"
    }

    return(
        <form style={styles} onSubmit={handleSubmit}>
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
        <button>Update</button>
    </form>
    )
}

export default UpdateSeries;