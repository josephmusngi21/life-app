import React from 'react';
import style from '/Note.module.css';
import NoteList from './NoteList/NoteList';
import NoteShow from './NoteShow/NoteShow';

function Note() {
  return (
    <div className={style.main}>
      <NoteList />
      <NoteShow />
    </div>
  )
}

export default Note
 