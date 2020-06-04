import React, { useState } from "react";


const StepCounter = ({ max, step }) => {

    //set the intitial state which is stored else where
    const [counter, setCounter] = useState(0);

    //create event handlers
    const handleClickPlus = () => setCounter(counter + (counter < max ? step : 0));

    const handleClickMinus = () => setCounter(counter - (counter > 0 ? step : 0));

    //render the component for the user
    return (
        <div className="card">
            <h3>Hooks: Step  Counter</h3>
            <h1>{counter}</h1>
            <button
                onClick={handleClickPlus}
                type="button" className="btn btn-info">
                +
            </button>
            <button
                onClick={handleClickMinus}
                type="button" className="btn btn-info">
                -
            </button>
        </div>
    );
}

StepCounter.defaultProps = {
    max: 100
};

export default StepCounter;