import React, { useState } from "react";


const Counter = ({ max, initial }) => {

    //set the intitial state which is stored else where
    const [counter, setCounter] = useState(50);

    //create event handlers
    const handleClickPlus = () => setCounter(counter + (counter < max ? 1 : 0));

    const handleClickMinus = () => setCounter(counter - (counter > 50 ? 1 : 0));

    //render the component for the user
    return (
        <div className="card">
            <h3>Hooks: Counter</h3>
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

Counter.defaultProps = {
    initial: 50,
    max: 100
};

export default Counter;