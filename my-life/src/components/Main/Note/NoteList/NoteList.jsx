import React from "react";
import NoteCard from "../NoteCard/NoteCard";

function NoteList(noteCount=0) {
  const handleSubmit = () => {

  };

  const handleChange = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <div>
        <h1>General</h1>
        <button>
          {" "}
          <img alt='' src=""></img>
        </button>
      </div>

      <div className="Search">
        <div className="Items">
          <p>{`${noteCount} Notes`}</p>
          <div className="Shortcut">
            <img alt="shortcut" src=""></img>
            <img alt="shortcut" src=""></img>
            <img alt="shortcut" src=""></img>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
            <input />
            <button onClick={handleChange}/>

        </form>
      </div>

      <div className='AllNotes'>
        <NoteCard />
      </div>
    </div>
  );
}

export default NoteList;
