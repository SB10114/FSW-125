

function Book({ deleteBook, title, genre, _id}) {
    
    
    return (
        <div className = 'book'>
           <h1>Title: {title}</h1>
           <p>Genre: {genre}</p>
           <button onClick = {deleteBook} className = 'delete-button'>Delete</button>
        </div>
    )
}

export default Book;