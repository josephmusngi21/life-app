import React, { useEffect, useState } from "react";
import Styles from "../Calender/Calender.module.css";
import Day from "../../Main/Calender/Day/Day";
import CalendarClass from "../../../assets/Calender";

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [calendarOutput, setCalendarOutput] = useState([]);

  useEffect(() => {
    const calendarInstance = new CalendarClass();
    setCalendarOutput(calendarInstance.calendarToList(currentMonth));
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
        <button
          className={`${Styles.button} ${currentMonth <= 1 ? Styles.hidden : ""}`}
          onClick={goBack}
        >
          {"<"}
        </button>
        <p className={Styles.month}>
          {new Date(2024, currentMonth - 1).toLocaleString("default", {
            month: "long",
          })}
        </p>
        <button
          className={`${Styles.button} ${currentMonth >= 12 ? Styles.hidden : ""}`}
          onClick={goForward}
        >
          {">"}
        </button>
      </nav>
      <div className={Styles.days}>
        {calendarOutput.map((week, weekIndex) => (
          <div key={weekIndex} className={Styles.week}>
            {week.map((day, dayIndex) => (
              <Day key={dayIndex} day={day} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
