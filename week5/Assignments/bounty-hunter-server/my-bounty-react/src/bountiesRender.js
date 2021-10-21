

function bountiesRender({firstName, lastName, bounty, status, allegience}) {

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
            <p> Life Status: {status ? 'Alive' : 'Dead'}</p>
            <p> Bounty: {bounty} </p>
            <p> Alligence: {allegience} </p>
        </div>
    )
}

export default bountiesRender;