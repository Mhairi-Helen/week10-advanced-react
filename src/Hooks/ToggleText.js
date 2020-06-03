import React, { useState } from "react";

const ToggleText = ({ initial, alternate }) => {

    const [clicked, setClicked] = useState(true)


    const handleClick = () => setClicked(!clicked);


    return (
        <div className="card">
            <h3>Hooks: Toggle Text</h3>
            <p className="btn btn-primary" onClick={handleClick}> {clicked ? initial : alternate} </p>
        </div >
    );


};

ToggleText.defaultProps = {
    initial: "Hello",
    alternate: "World",
};


export default ToggleText;