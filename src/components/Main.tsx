import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
import './../App.css';
import Home from "./Pages/Home/Home";
import TicTac from "./Pages/TicTacToe/TicTac";
import AboutMe from "./Pages/AboutMe/AboutMe";

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about-me' component={AboutMe}/>
        <Route path='/tic-tac-toe' component={TicTac}/>
      </Switch>
    </main>
);

export default Main;