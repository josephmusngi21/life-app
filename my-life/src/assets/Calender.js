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

    this.days = {
      "00": "Monday",
      "01": "Tuesday",
      "02": "Wednesday",
      "03": "Thursday",
      "04": "Friday",
      "05": "Saturday",
      "06": "Sunday",
    };
  }

  returnDay() {
    return this.firstDay;
  };

  addNote(day, note) {
    //TODO This will add a note using the Date class and a day to choose a specific day for the note
    this.date.addNote(note);
  }

  viewNote(day) {
    //TODO This will view the note from a given date
    this.date.getNote();
  }

  createCurrentCalender() {
    let month = this.months[String(this.date.getMonth() + 1)];
    let day = 1;
    let output = '       ' + month[0] + '\n';
    output += 'M  T  W  TH F SA SU\n';
  
    // Adjust for the first day of the week
    for (let i = 0; i < this.firstDay; i++) {
      output += '   ';
    }
  
    while (day <= month[1]) {
      for (let i = this.firstDay; i < 7 && day <= month[1]; i++) {
        output += (day < 10 ? '0' : '') + day + ' ';
        day++;
      }
      this.firstDay = 0;
      output += '\n';
    }
  
    return output;
  };
  
};
const today = new Calender();
console.log(today.createCurrentCalender());

// console.log(today.returnDay());
// console.log(today.getMonth());


