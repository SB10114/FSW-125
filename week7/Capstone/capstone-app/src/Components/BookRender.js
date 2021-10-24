import { useState } from "react";
import DeleteSeries from "./DeleteSeries";
import UpdateSeries from './UpdateSeries';

function BookRender({seriesTitle, author, readAll, deleteSeries, updateSeries, numberOfBooks, bookTitles, id}) {


    const [editMode, setEditMode] = useState(false)

    function setEdit(edit) {
      setEditMode(edit)
    }


    return (
        <div className = "inputs">

          { !editMode ?
            <>
              <p> Series: {seriesTitle} </p>
              <p> Author: {author} </p>
              <p> Read: {readAll ? 'true' : 'false'}</p>
              <p> # in series: {numberOfBooks} </p>
              <p> Book Titles: {bookTitles} </p>
              <p> id = {id} </p>

              <DeleteSeries id = {id} submit = {deleteSeries} />

              <button onClick={() => setEdit(true)}>Edit</button>
            </>
            :
            <>
              <UpdateSeries 
                id = {id} 
                submit = {updateSeries} 
                edit = {setEdit}
                seriesTitle={seriesTitle}
                author = {author}
                readAll = {readAll}
                numberOfBooks = {numberOfBooks}
                bookTitles = {bookTitles}
              />
              <button onClick={() => setEdit(false)}>Cancel</button>
            </>

          }

        </div>
    )
}

export default BookRender;