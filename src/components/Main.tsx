import React, {useState} from 'react';
import { Switch, Route } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
import '../App.scss';
import Home from "./Pages/Home/Home";
import TicTac from "./Pages/TicTacToe/TicTac";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Trash from "./Pages/Trash/Trash";
import Weather from "./Pages/WeatherPage/Weather";
import Header from "./Header/Header";
import { langContext, useContextController} from "./Context"


const Main = () => {
    const context = useContextController();

    let connected = true;
    return (
    <main>
        <langContext.Provider value={{language: context.language, setLanguage: context.setLanguage }}>
            {connected ?
                <header className="App-header">
                    <Header />
                </header> : null}
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about-me' component={AboutMe}/>
            <Route path='/tic-tac-toe' component={TicTac}/>
            <Route path='/trash' component={Trash}/>
            <Route path='/weather' component={Weather}/>
          </Switch>
        </langContext.Provider>
    </main>
)};

export default Main;
