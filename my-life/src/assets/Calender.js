const Dates_ = require("./Date.js");

class Calender {
  constructor() {
    this.date = new Date();
    this.Calender = {};
    this.firstDay = new Date().getDay();
    this.leapYear = this.getYear % 4 === 0;

    this.months = {
      "01": ["January", 31],
      "02": ["February", this.leapYear ? 29 : 28],
      "03": ["March", 31],
      "04": ["April", 30],
      "05": ["May", 31],
      "06": ["June", 30],
      "07": ["July", 31],
      "08": ["August", 31],
      "09": ["September", 30],
      '10': ["October", 31],
      '11': ["November", 30],
      '12': ["December", 31],
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

  createCalender() {

  };
}


const today = new Calender();

console.log(today.date.getDay());
// console.log(today.returnDay());
// console.log(today.getMonth());
