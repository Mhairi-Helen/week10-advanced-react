import React, { Component } from "react";
import axios from "../AJAX/axios";

class CreateArticle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: '',
            tags: '',

        };

        this.handleTitle = this.handleTitle.bind(this);
        this.handleContent = this.handleContent.bind(this);
        this.handleTags = this.handleTags.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitle(e) {
        this.setState({ title: e.currentTarget.value });
    };

    handleContent(e) {
        this.setState({ content: e.currentTarget.value });
    };

    handleTags(e) {
        this.setState({ Tags: e.currentTarget.value });
    };

    handleSubmit(e) {

        e.preventDefault();

        //destructure object
        let { title, content, tags } = this.state;

        axios.post("/articles", {
            title: title,
            content: content,
            tags: tags.split(/\s*,\s*/),
        }).then(() => {
            //clear fields on submission
            this.setState({
                title: '',
                content: '',
                tags: '',
            });
        });
    }


    render() {

        let { title, content, tags } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group" >
                    <label htmlFor="title">Article Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Title of post" onChange={this.handleTitle} value={title} />
                </div>

                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea className="form-control" id="content" rows="5" placeholder="Enter content" onChange={this.handleContent} value={content}> </textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="tags">Tags</label>
                    <input className="form-control" id="tags" placeholder="Tags..." onChange={this.handleTags} value={tags} />
                </div>


                <input
                    type="submit" value="Submit" variant="info" />
            </form>
        );
    };




};


export default CreateArticle;