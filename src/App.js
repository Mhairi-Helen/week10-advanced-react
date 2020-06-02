import React from 'react';
import './App.css';

//importing ReactRouter components to use the functionality
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


import Header from "./Components/Header";
import Squares from "./Squares/Squares";
import SignUp from "./Password/SignUp";
import Button from "./Components/Button";
import Form from "./Forms/Form";
import Articles from "./News/Articles";

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
      </Route>


      <Route exact path="/week10-practice-app/news" component={Articles} />

      {/* <Route exact path="/week9-practice-app/challenges" component={Challenges} />

        <Route exact path="/week9-practice-app/quiz" component={Quiz} /> */}

    </Router>
  );
}

export default App;
