import React, { Component } from "react";

class Max extends Component {
    constructor(props) {
        super(props);

        this.state = {
            this.state = {
                counter: 50,
            };
        };
    };

    render() {

        let numbers = [1, 2, 3, 4];

        return (
            /* use map to output an <div> for each item in the array */
            {
                numbers.map((value, index) => (

                    <div className="card" key={index}>
                        <h1>{value}</h1>
                        <button
                            onClick={this.handleClickPlus}
                            type="button" className="btn btn-info">
                            +
                        </button>
                        <button
                            onClick={this.handleClickMinus}
                            type="button" className="btn btn-info">
                            -
                        </button>
                    </div>

                ))
            }
        );

    };