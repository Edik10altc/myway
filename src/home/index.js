import React, { Component } from 'react';
import RightBar from './RightBar';
import LeftBar from './LeftBar';
import MainBoard from './MainBoard';
import logo from './logo.svg';
import s from './App.css';


class HomePage extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className={s.App}>
        <div className={s.AppHeader}>
          <img src={logo} className={s.AppLogo} alt="logo" />
          <h5 className={s.AppTitle}>Toolbar place holder</h5>
        </div>
        <LeftBar/>
        <MainBoard/>
        <RightBar/>
      </div>
    )}
}

export default HomePage;
