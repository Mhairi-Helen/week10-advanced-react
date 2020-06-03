import React from 'react';
import './App.css';

//importing ReactRouter components to use the functionality
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";


import Header from "./Components/Header";
import Squares from "./Squares/Squares";
import SignUp from "./Password/SignUp";
import Button from "./Components/Button";
import Form from "./Forms/Form";
import Articles from "./News/Articles";
import Article from "./News/Article";
import CreateArticle from "./News/CreateArticle";
import Clicked from "./Hooks/Clicked";
import Square from "./Hooks/Square";
import ToggleText from "./Hooks/ToggleText";
import Counter from "./Hooks/Counter";

function App() {
  return (
    <Router>

      <header >
        <Header>Practice Makes Perfect</Header>
      </header>

      <Route exact path="/week10-practice-app">
        <Squares color="hotpink" />
        <SignUp minLength={12} />
        <Button handleUpdate={console.log} />
        <Form handleSubmit={console.log} />
        <Clicked />
        <Square color="hotpink" />
        <ToggleText initial="Hello" alternate="World" />
        <Counter initial={50} max={100} />

      </Route>



      <Switch>
        <Route exact path="/week10-practice-app/news/create" component={CreateArticle} />

        <Route exact path="/week10-practice-app/news" component={Articles} />

        <Route exact path="/week10-practice-app/news/:id" render={({ match }) => (
          <Article id={match.params.id} />
        )} />

      </Switch>



    </Router>
  );
}

export default App;
