class Date {
  constructor() {
    this.notes = {};
  }

  addNote(date, note) {
    this.notes[date] = note;
  }

  getNote(date) {
    return `Note: ${this.notes[date]}`;
    // return this.notes[date];
  }

  deleteNote(date) {
    delete this.notes[date];
  }

  getCurrentDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return today;
  }
}

// let today = new Calender();
// let currentDate = today.getCurrentDate();
// console.log(today.addNote(currentDate, 'hello'));

// console.log((today.getNote(currentDate)));

export default Date;

