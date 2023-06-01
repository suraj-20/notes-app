import React, { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "./Navbar/Navbar";
import Notes from "./Notes/Notes";
import { nanoid } from "nanoid";

const Home = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my note! You can start typing in the new note and do what you want",
      date: "15/10/2003",
    },
  ]);

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("Notes"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNote = notes.filter((note) => note.id !== id);
    setNotes(newNote);
    // console.log("deleted");
    // console.log(id);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="home_container">
        <Navbar handleToggleDarkMode={setDarkMode} />
        <Notes
          notes={notes}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default Home;
