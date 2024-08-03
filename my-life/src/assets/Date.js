class Dates {
  constructor(notes={}, date) {
    this.notes = notes;
    this.today = new Date();
    this.nextNoteId = 1;
    [this.month, this.day, this.year] = date;
  }

  addNote(date, note) {
    if (this.notes[date]) {
      this.notes[date].push({ id: this.nextNoteId++, note });
    } else {
      this.notes[date] = [{ id: this.nextNoteId++, note }];
    }
  }

  deleteNote(date, id) {
    let noteIndex = this.notes[date].findIndex((note) => note.id === id);
    if (noteIndex !== -1) {
      this.notes[date].splice(noteIndex, 1);
    }
  }

  getNote(date) {
    return this.notes[date];
  }

  printNote(date) {
    return `Note: ${this.notes[date]}`;
  }

  getMonth() {
    return String(this.today.getMonth() + 1).padStart(2, "0");
  }

  getDate() {
    return String(this.today.getDate()).padStart(2, "0");
  }

  getYear() {
    return String(this.today.getFullYear());
  }

  getCurrentDate() {
    let dd = String(this.today.getDate()).padStart(2, "0");
    let mm = String(this.today.getMonth() + 1).padStart(2, "0");
    let yyyy = String(this.today.getFullYear());

    this.today = mm + "/" + dd + "/" + yyyy;
    return this.today;
  }
}

module.exports = Dates;
