import React, { Component } from "react";

import Square from "./Square";



class Squares extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 1
        };
    };


    render() {

        let { color } = this.props;
        let { selected } = this.state;


        return (
            <>
                <Square
                    name="One"
                    selected={selected === 1}
                    handleClick={() => this.setState({ selected: 1 })}
                    color={color}
                />
                <Square
                    name="Two"
                    selected={selected === 2}
                    handleClick={() => this.setState({ selected: 2 })}
                    color={color}
                />
            </>
        );
    }





};


export default Squares;

