import DeleteBounty from "./Components/DeleteBounty";
import UpdateBounty from './Components/UpdateBounty';

function bountiesRender({firstName, lastName, bounty, deleteBounty, updateBounty, status, type, id}) {

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
            <p> First Name: {firstName} </p>
            <p> Last Name: {lastName} </p>
            <p> Life Status: {status ? 'alive' : 'dead'}</p>
            <p> Bounty: {bounty} </p>
            <p> Allegiance: {type} </p>
            <p> id = {id} </p>

          <DeleteBounty id = {id} submit = {deleteBounty} />
          <UpdateBounty id = {id} submit = {updateBounty} />
        </div>
    )
}

export default bountiesRender;