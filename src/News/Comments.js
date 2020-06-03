import React, { Component } from "react";
import axios from "../AJAX/axios";

class Comments extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            comments: [],
        };

    }

    componentDidMount() {
        const { id } = this.props;

        // make the GET request
        axios.get(`/articles/${id}/comments`).then(({ data }) => {
            // once the data has come back update the component state
            this.setState({
                loaded: true,
                comments: data.data,
            });
        }, error => {
            console.log(error)
        });
    }

    render() {

        let { comments, loaded } = this.state;

        return !loaded ? <p>Loading...</p> : (
            <>

                <h3>Comments</h3>
                <ul className="list-group">
                    {comments.map(comment => (
                        <li key={comment.id} className="list-group-item">
                            {comment.comment}
                            {comment.email}
                        </li>
                    ))}
                </ul>


            </>
        );
    }

};

export default Comments;