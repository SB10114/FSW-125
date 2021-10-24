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

        props.submit(id, inputs)
        setId(initInputs)
        props.edit(false)
    }
    
    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }


    return(
        <form className = "updateButton" onSubmit={handleSubmit}>
            <h1>
                {inputs.seriesTitle}
            </h1>
            <p>
            <input 
                type="text"
                name="seriesTitle"
                value={inputs.seriesTitle}
                onChange={handleChange}
                placeholder="Enter Series Title:"
                />
                </p>
            <p>
            <input 
                type="text"
                name="author"
                value={inputs.author}
                onChange={handleChange}
                placeholder="Enter Series Author:"
                />
                </p>
            <p>
            <input 
                type="text"
                name="numberOfBooks"
                value={inputs.numberOfBooks}
                onChange={handleChange}
                placeholder="Number in series:"
                />
                </p>
            <p>
            <input 
                type="text"
                name="readAll"
                value={inputs.readAll}
                onChange={handleChange}
                placeholder="Completed series:"
                />
                </p>
            <p>
            <input className = "titleStyles"
                type="text"
                name="bookTitles"
                value={inputs.bookTitles}
                onChange={handleChange}
                placeholder="Book titles: "
                />
                </p>
        <button>Update</button>
    </form>
    )
}

export default UpdateSeries;