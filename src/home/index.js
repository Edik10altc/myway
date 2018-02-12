import React, { Component } from 'react';
import RightBar from './RightBar';
import LeftBar from './LeftBar';
import MainBoard from './MainBoard';
import logo from './logo.svg';
import header from './Header.png'
import s from './App.css';


class HomePage extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className={s.App}>
        <div className={s.AppHeader}>
         <img src={header} className={s.App}></img>
        </div>
        <LeftBar/>
        <MainBoard/>
        <RightBar/>
      </div>
    )}
}

export default HomePage;
