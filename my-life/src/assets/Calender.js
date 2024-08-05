class Calender {
  constructor() {
    this.date = new Date();
    this.Calender = {};
    this.firstDay = new Date(
      this.date.getFullYear(),
      this.date.getMonth(),
      1
    ).getDay();
    this.leapYear = this.date.getFullYear() % 4 === 0;

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

  createCalender(setMonth) {
    let month = this.months[setMonth];
    let day = 1;
    let output = "";
    output += "Su M  T  W  Th F  Sa\n";

    let firstDay = new Date(this.date.getFullYear(), setMonth - 1, 1).getDay();

    for (let i = 0; i < firstDay; i++) {
      output += "   ";
    }

    while (day <= month[1]) {
      for (let i = firstDay; i < 7 && day <= month[1]; i++) {
        output += (day < 10 ? "0" : "") + day + " ";
        day++;
      }
      firstDay = 0;
      output += "\n";
    }

    return output;
  }

  calendarToList(setMonth) {
    let dayCount = this.months[setMonth][1];
    console.log(`dayCount: ${dayCount}`);
    let day = 1;
    let firstDay = new Date(this.date.getFullYear(), setMonth - 1, 1).getDay();
    console.log(firstDay);
    let calendar = [["Su", "M ", "T ", "W ", "Th", "F ", "Sa"]];

    while (day <= dayCount) {
      let week = [];
      for (let i = 0; i < 7; i++) {
        if (day > dayCount) break;
        if (calendar.length === 1 && i < firstDay) {
          week.push("   ");
        } else {
          week.push(day.toString().padStart(2, " "));
          day++;
        };
      };
      calendar.push(week);
    };
    return calendar;
  };
};

module.exports = Calender;

let c = new Calender();
// console.log(c.createCalender(8));
console.log(c.calendarToList(8));
