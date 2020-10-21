import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
import '../App.scss';
import Home from "./Pages/Home/Home";
import TicTac from "./Pages/TicTacToe/TicTac";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Trash from "./Pages/Trash/Trash";
import Weather from "./Pages/WeatherPage/Weather";

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about-me' component={AboutMe}/>
        <Route path='/tic-tac-toe' component={TicTac}/>
        <Route path='/trash' component={Trash}/>
        <Route path='/weather' component={Weather}/>
      </Switch>
    </main>
);

export default Main;