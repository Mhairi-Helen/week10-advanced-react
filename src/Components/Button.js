import React, { Component } from "react";


class Button extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        };

        this.handleButtonClick = this.handleButtonClick.bind(this)

    }

    //the methods should be making the logical decision

    handleButtonClick() {
        // destructure props to get the handleUpdate function this must be passed in from the parent
        let { handleUpdate } = this.props;
        let newCounter = this.state.counter + 1;

        // now, call the passed in handleSubmit function and pass it the current value of count
        handleUpdate(newCounter);
        this.setState({ counter: newCounter });
    }

    //render is about rendering what the user is seeing
    render() {

        let { counter } = this.state
        return (
            <div className="card">
                <button
                    onClick={this.handleButtonClick}
                    type="button" className="btn-primary">
                    Push Me
                </button>
            </div>
        );
    }
}



export default Button;