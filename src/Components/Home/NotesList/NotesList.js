import React from "react";
import "./NotesList.css";

const NotesList = ({ id, text, date, handleDeleteNote }) => {
  return (
    <>
      <div className="notes">
        <span>{text}</span>
        <div className="note_footer">
          <small>{date}</small>
          <button className="delete" onClick={() => handleDeleteNote(id)}>
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default NotesList;
