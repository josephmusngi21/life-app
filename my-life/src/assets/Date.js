class Dates {
  constructor() {
    this.notes = {};
    this.today = new Date();

  }

  addNote(date, note) {
    this.notes[date] = note;
  }

  getNote(date) {
    return this.notes[date];
  }

  printNote(date) {
    return `Note: ${this.notes[date]}`;
  }

  deleteNote(date) {
    delete this.notes[date];
  }

  getMonth() {
    return String(this.today.getMonth() + 1).padStart(2, '0');
  }

  getDate() {
    return String(this.today.getDate()).padStart(2, '0');

  }

  getYear() {
    return String(this.today.getFullYear());
  }

  getCurrentDate() {
    let dd = String(this.today.getDate()).padStart(2, '0');
    let mm = String(this.today.getMonth() + 1).padStart(2, '0');
    let yyyy = String(this.today.getFullYear());

    this.today = mm + '/' + dd + '/' + yyyy;
    return this.today;
  }
}

module.exports = Dates;