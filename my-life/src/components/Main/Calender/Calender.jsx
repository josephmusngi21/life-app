import React, { useEffect, useState } from "react";
import Styles from "./Calender.module.css";
import Day from "./Day/Day";

function Calender() {
  const CalenderClass = require("../../../assets/Calender");
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [calendarOutput, setCalendarOutput] = useState("");

  const [showNotes, setShowNotes] = useState(null);

  useEffect(() => {
    const calenderInstance = new CalenderClass();
    setCalendarOutput(calenderInstance.createCalender(currentMonth));
  }, [currentMonth]);

  const goBack = () => {
    if (currentMonth > 1) {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goForward = () => {
    if (currentMonth < 12) {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className={Styles.container}>
      <nav className={Styles.nav}>
        <button className={Styles.button} onClick={goBack}>
          {"<"}
        </button>
        <p className={Styles.month}>
          {new Date(2024, currentMonth - 1).toLocaleString("default", {
            month: "long",
          })}
        </p>
        <button className={Styles.button} onClick={goForward}>
          {">"}
        </button>
      </nav>
      <pre className={Styles.days}>{calendarOutput}</pre>
    </div>
  );
}

export default Calender;
