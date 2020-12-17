import React from 'react';
// import logo from './logo.svg';
// import Button from '@material-ui/core/Button';
import './App.scss';
// import Header from "./components/Header/Header";
import Main from "./components/Main";
import { store } from "./Redux-Store/Store"
import { Provider } from 'react-redux'

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          {/*<header className="App-header">*/}
          {/*  <Header />*/}


          <Main />

        </div>
      </Provider>
  );
}

export default App;
