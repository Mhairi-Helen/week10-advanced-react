import React, { Component } from "react";




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

// const Square = ({ color, selected, handleClick }) => {



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
// }


export default Square;