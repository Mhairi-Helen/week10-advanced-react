import React, { useState } from "react";

const CatchMeIfYouCan = ({ jump }) => {

    //set initial state
    const [click, setClick] = useState(0);

    //change state
    const handleClick = () => setClick(click + jump);


    return (
        <button
            style={{ position: "relative", top: top + "px" }}
            onClick={handleClick}
            className="btn btn-primary"
        >
            Catch Me If You Can!
        </button>
    );
}


CatchMeIfYouCan.defaultProps = {
    jump: 100,
};

export default CatchMeIfYouCan;