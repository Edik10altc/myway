import React, { Component } from 'react';
import RightBar from './RightBar';
import LeftBar from './LeftBar';
import MainBoard from './MainBoard';
import logo from './logo.svg';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
    }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <LeftBar/>
          <MainBoard/>
          <RightBar/>
      </div>
    )}
}

export default App;
