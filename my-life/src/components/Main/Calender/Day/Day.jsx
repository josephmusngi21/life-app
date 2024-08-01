import React from 'react';
import Styles from './Day.module.css';

function Day(day, notes) {
  return (
    <div className={Styles.container}>
        <p className={Styles.day}>{day}</p>
    </div>
  )
}

export default Day