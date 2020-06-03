import React, { Component } from "react";
import axios from "../AJAX/axios";
import Comments from "./Comments"

class Article extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            article: null,
        };

    }

    componentDidMount() {
        const { id } = this.props;

        // make the GET request
        axios.get(`/articles/${id}`).then(({ data }) => {
            // once the data has come back update the component state
            this.setState({
                loaded: true,
                article: data.data,
            });
        }, error => {
            console.log(error)
        });
    }

    render() {

        let { article, loaded } = this.state;

        return !loaded ? <p>Loading...</p> : (
            <>
                <h2>Article #{article.id}</h2>
                <h2>{article.title}</h2>
                <p>{article.content}</p>
                {article.tags.map(tag => (
                    <button className="btn btn-info">{tag}</button>))
                }
                <Comments id={article.id} />


            </>
        );
    }

};

export default Article;