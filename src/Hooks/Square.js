import React, { useState } from "react";

const Square = ({ color }) => {

    const [clicked, setClicked] = useState(false)


    const handleClick = () => setClicked(!clicked);

    return (
        <>
            <h3>Hooks: Square</h3>
            <div
                onClick={handleClick}
                style={{
                    height: 200,
                    width: 200,
                    background: (clicked ? color : "purple"),
                    margin: "1rem"
                }}
            />
        </>
    );
}


Square.defaultProps = {
    colour: "hotpink",
};

export default Square;