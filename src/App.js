import React from 'react';
import './App.css';

//importing ReactRouter components to use the functionality
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


import Header from "./Components/Header";
import Squares from "./Squares/Squares";

function App() {
  return (
    <Router>

      <header >
        <Header>Practice Makes Perfect</Header>
      </header>

      <Squares color="hotpink" />


      {/* <Route exact path="/week9-practice-app/challenges" component={Challenges} />

        <Route exact path="/week9-practice-app/quiz" component={Quiz} /> */}

    </Router>
  );
}

export default App;
