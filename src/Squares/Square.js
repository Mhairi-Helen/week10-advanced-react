import React from "react";




const Square = ({ color, selected, handleClick }) => {

    let style = {
        height: 200,
        width: 200,
        background: selected ? color : "purple",
        margin: "1rem"
    };

    return (
        <div
            onClick={handleClick}
            style={style}
        />
    );
}

// this is another way that style could be written
//     return (
//         <div
//             onClick={handleClick}
//             style={{
//                 height: 200,
//                 width: 200,
//                 background: selected ? color : "purple",
//                 margin: "1rem"
//             }}
//         />
//     );


export default Square;