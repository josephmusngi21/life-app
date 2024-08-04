import React from 'react';
import Styles from '../NoteShow/NoteShow.module.css';

function NoteShow(title, hashtag, notes) {
  return (
    <div>
        <div className='top'>
            
        </div>

        <div className='title'>
            <p className='title'>{title}</p>
            <p className='hashtag'>{hashtag}</p>
        </div>
        
        <div className='note'>
            {notes}
        </div>
    </div>
  )
}

export default NoteShow