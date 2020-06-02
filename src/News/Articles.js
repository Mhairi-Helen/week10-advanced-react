import React, { Component } from "react";
import axios from "../AJAX/axios";

class Articles extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            articles: [],
        };

    }

    componentDidMount() {
        // make the GET request
        axios.get("/articles").then(({ data }) => {
            // once the data has come back update the component state
            this.setState({
                loaded: true,
                articles: data.data,
            });
        });
    }




    render() {

        let { articles, loaded } = this.state;

        return !loaded ? <p>Loading...</p> : (
            <>
                <h2>Articles</h2>
                <ul className="list-group">
                    {articles.map(article => (
                        <li key={article.id} className="list-group-item">
                            {article.title}
                            {article.tags.map(tag => (
                                <button className="btn btn-info">{tag}</button>))}
                        </li>
                    ))}
                </ul>
            </>
        );
    }



};

export default Articles;