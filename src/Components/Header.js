import React, { Component } from "react";
// we use className to add classes for Bootstrap styling



class Header extends Component {

    render() {
        const { children } = this.props;

        return (
            <header className="jumbotron">
                <h1>{children}</h1>
            </header>
        );
    }
}


export default Header;