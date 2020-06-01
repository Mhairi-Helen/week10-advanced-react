import React, { Component } from "react";


import Password from "./Password";



class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            confirmation: ''
        };
    };


    render() {

        let { minLength } = this.props;
        let { password, confirmation } = this.state;
        let valid = confirmation === password && password.length >= minLength;


        return (
            <>
                <Password
                    name="One"
                    label="Enter Password"
                    placeholder={'Enter password...'}
                    valid={valid}
                    handleChange={(e) => this.setState({ password: e.currentTarget.value })}
                    value={password}
                />
                <Password
                    name="Two"
                    label="Confirm Password"
                    placeholder={'Confirm password...'}
                    valid={valid}
                    handleChange={(e) => this.setState({ confirmation: e.currentTarget.value })}
                    value={confirmation}
                />
            </>
        );
    }
};


export default SignUp;