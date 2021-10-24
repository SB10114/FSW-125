import DeleteSeries from "./DeleteSeries";
import UpdateSeries from './UpdateSeries';

function BookRender({seriesTitle, author, readAll, deleteSeries, updateSeries, numberOfBooks, bookTitles, id}) {

    const myStyle= {
        color: "black",
        padding: "15px",
        fontFamily: "Arial",
        textAlign: "center",
        borderWidth: 4,
        borderStyle: "solid",
        borderColor: "black",
      }

    return (
        <div style={myStyle}>
            <p> Series: {seriesTitle} </p>
            <p> Author: {author} </p>
            <p> Read: {readAll ? 'true' : 'false'}</p>
            <p> # in series: {numberOfBooks} </p>
            <p> Book Titles: {bookTitles} </p>
            <p> id = {id} </p>

          <DeleteSeries id = {id} submit = {deleteSeries} />
          <UpdateSeries id = {id} submit = {updateSeries} />
        </div>
    )
}

export default BookRender;