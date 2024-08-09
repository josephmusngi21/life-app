import React from 'react';
import Styles from './App.module.css';
import Calender from '../Main/Calender/Calender';
import SideNav from '../Nav/SideNav/SideNav';

function App() {
  return (
    <div className={Styles.container}>
      <SideNav />
      <Calender />
    </div>
  )
}

export default App