import axios from "./axios";

//GET request
axios.get("/articles").then(({ data }) => console.log(data.data));

//POST request, with the given data
// axios.post("/articles", {
//     title: "Day 2 Week 10: AJAX",
//     content: "brain has left me now",
//     tags: ["fun", "learning", "brainmelt"],
// }).then(({ data }) => console.log(data.data.id));

//get article by id
// axios.get("/articles/37").then(({ data }) => console.log(data.data));

//delete article
// axios.delete("/articles/190").then(({ data }) => console.log("Deleted"));


//get all the tags from the articles and return name and id
axios.get("/tags").then(({ data }) => console.log(data.data));