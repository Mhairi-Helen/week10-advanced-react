import React, { useState } from "react";

const Clicked = () => {

    const [state, setState] = useState(false)

    const handleClick = () => setState(true);


    return (
        <>
            <h3>Hooks: Clicked</h3>
            <p className="btn btn-primary" onClick={handleClick}>
                {state === true ? "Clicked" : "Not clicked"}
            </p>
        </>
    );
};

export default Clicked;