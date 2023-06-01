import React from "react";
import "./Notes.css";
import NotesList from "../NotesList/NotesList";
import AddNotes from "../AddNotes/AddNotes";

const Notes = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <>
      <div className="notes_container">
        <div className="notes_lists">
          {notes.map((note, index) => (
            <NotesList
              key={index}
              id={note.id}
              text={note.text}
              date={note.date}
              handleDeleteNote={handleDeleteNote}
            />
          ))}
          <AddNotes handleAddNote={handleAddNote} />
        </div>
      </div>
    </>
  );
};

export default Notes;
