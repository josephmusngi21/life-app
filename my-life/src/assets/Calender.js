const Dates_ = require("./Date.js");

class Calender {
  constructor() {
    this.date = new Date();
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

let cal = new Calender();

console.log(cal.createCalender());
console.log(cal.createCalender(5));