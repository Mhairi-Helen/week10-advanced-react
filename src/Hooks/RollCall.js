import React, { useState } from "react";

const RollCall = ({ names }) => {

    //setting up initial state
    const [index, setIndex] = useState(0);


    //updating the state when events are fired
    const handleClick = () => setIndex((index + 1) % names.length);



    //displaying values based on this.state in JSX


    return (
        <>
            <h3>Hooks: Roll Call!</h3>
            <p className="card card-body">{names[index]}</p>
            <button className="btn btn-primary" onClick={handleClick}>Next</button>
        </>

    );
}



export default RollCall;