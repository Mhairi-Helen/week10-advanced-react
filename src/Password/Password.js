import React, { Component } from "react";



class Password extends Component {


    constructor(props) {
        super(props);
        // add the value of the input to the state
        this.state = { input: '' };

        this.handleChange = this.handleChange.bind(this);
    }




    // e is the standard DOM event object
    handleChange(e) {
        // e.currentTarget: DOM element we attached the event handler to use the value property to read its current value
        this.setState({ input: e.currentTarget.value });
    }






    render() {
        //Where we reference this.state and this.props a lot its a good place to destructure them instead and save us some extra code (ie. Password.js)

        let { label, name } = this.props;
        let { input } = this.state;

        return (
            <div className='form-group'>
                <label >{label}</label>
                <input
                    className='form-control'
                    onChange={this.handleChange}
                    placeholder={'Enter name...'}
                    value={input}
                    name={name} />
                <p className='form-text text-muted'>
                    Password: {input.password} characters
        </p>
            </div>
        );
    }
}
export default Password;
