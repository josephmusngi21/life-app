import React from "react";
import Styles from "./Calender.module.css";
const Date = require("./Date.js");

function Calender() {
  let currentDate = new Date();
  var month = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    10: "October",
    11: "November",
    12: "December",
  };

  var days = {
    "01": "Monday",
    "02": "Tuesday",
    "03": "Wednesday",
    "04": "Thursday",
    "05": "Friday",
    "06": "Saturday",
    "07": "Sunday",
  };

  return (
    <div>
      <nav>
        <h1 className={Styles.leftArrow}>{"<"}</h1>
        <h1>{month[currentDate.month]}</h1>
        <h1 className={Styles.rightArrow}>{">"}</h1>
      </nav>

      <div className={Styles.days}>
        
      </div>
    </div>
  );
}

export default Calender;
