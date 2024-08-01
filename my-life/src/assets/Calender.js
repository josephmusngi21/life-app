const Dates_ = require("./Date.js");

class Calender {
  constructor() {
    this.date = new Dates_();
    this.Calender = {};
    this.firstDay = new Date().getDay();
    this.leapYear = this.getYear % 4 === 0;

    this.months = {
      1: ["January", 31],
      2: ["February", this.leapYear ? 29 : 28],
      3: ["March", 31],
      4: ["April", 30],
      5: ["May", 31],
      6: ["June", 30],
      7: ["July", 31],
      8: ["August", 31],
      9: ["September", 30],
      10: ["October", 31],
      11: ["November", 30],
      12: ["December", 31],
    };

    this.days = {
      "00": "Sunday",
      "01": "Monday",
      "02": "Tuesday",
      "03": "Wednesday",
      "04": "Thursday",
      "05": "Friday",
      "06": "Saturday",
    };
  }

  returnDay() {
    return this.firstDay;
  }

  addNote(date, note) {
    this.date.addNote(date, note);
  }

  viewNote(date) {
    return this.date.printNote(date);
  }

  viewMonthNote(month) {}

  createCalender(setMonth = String(this.date.getMonth() + 1)) {
    let month = this.months[String(setMonth)];
    console.log(month);
    console.log(month[0]);
    let day = 1;
    let output = "       " + month[0] + "\n";
    output += "Su M  T  W  Th F  Sa\n";

    for (let i = 0; i < this.firstDay; i++) {
      output += "   ";
    }
    console.log(`Month: ${month[0]}, First Day: ${this.firstDay}`);

    while (day <= month[1]) {
      for (let i = this.firstDay; i < 7 && day <= month[1]; i++) {
        output += (day < 10 ? "0" : "") + day + " ";
        day++;
      }
      this.firstDay = 0;
      output += "\n";
    }

    return output;
  }
}

export default Calender;