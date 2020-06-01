import React, { Component } from "react";


class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 50,
        };

        this.handleClickPlus = this.handleClickPlus.bind(this);
        this.handleClickMinus = this.handleClickMinus.bind(this);

    }


    //the methods should be making the logical decisions
    handleClickPlus() {
        let current = this.state.counter;

        if (current < this.props.max) {
            this.setState({ counter: current + 1 });
        };
    }

    handleClickMinus() {
        let current = this.state.counter;

        if (current > this.props.initial) {
            this.setState({ counter: current - 1 });
        };
    }

    //render is about rendering what the user is seeing
    render() {

        let { counter } = this.state
        return (
            <div className="card">
                <h1>{counter}</h1>
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
        );
    }
}

Counter.defaultProps = {
    initial: 50,
    max: 100
};

export default Counter;