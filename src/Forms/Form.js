import React, { Component } from "react";


class Form extends Component {


    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
        };

        this.formSubmit = this.formSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
    };

    handleName(e) {
        this.setState({ name: e.currentTarget.value });
    };

    handleEmail(e) {
        this.setState({ email: e.currentTarget.value });
    };

    //the methods should be making the logical decision

    formSubmit(e) {

        e.preventDefault();
        // destructure props to get the handleUpdate function this must be passed in from the parent
        let { handleSubmit } = this.props;

        //destructure object
        let { name, email } = this.state;

        //clear fields on submission
        this.setState({
            name: '',
            email: '',
        });

        //pass data up to app.js
        handleSubmit({
            name: name,
            email: email,
        });



    }
    // handleChange(e) => this.setState({ password: e.currentTarget.value })

    render() {

        let { name, email } = this.state;

        return (
            <form onSubmit={this.formSubmit}>
                <div className="form-group" >
                    <label htmlFor="Name">Name</label>
                    <input type="Name" className="form-control" id="Name" placeholder="Full name here..." onChange={this.handleName} value={name} />
                </div>

                <div className="form-group">
                    <label htmlFor="Email">Email address</label>
                    <input type="email" className="form-control" id="Email" placeholder="Enter email here..." onChange={this.handleEmail} value={email} />
                </div>


                <input
                    type="submit" value="Submit" className="btn-primary" />
            </form>
        );
    };
};

export default Form;