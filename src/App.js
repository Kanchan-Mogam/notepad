import React, { useState,useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./Components/NotesList";
import Search from "./Components/Search";


export default function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "19/19/2022"
    },

    {
      id: nanoid(),
      text: "This is my second note",
      date: "20/19/2022"
    },
  ]);

  const [searchText, setSearchText] = useState("");

useEffect(() => {
  const savedNotes = JSON.parse(
    localStorage.getItem('react-notes-app-data')
  );

  if(savedNotes){
    setNotes(savedNotes);
  }
}, []);

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data', 
      JSON.stringify(notes)
      );
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
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <>
      <div className="main-container">
        <div className="container">
          <h1>NOTES</h1>
          <Search handleSearchNote={setSearchText} />
          <NotesList
            notes={notes.filter((note) =>
              note.text.toLowerCase().includes(searchText)
            )}
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
          />
        </div>
      </div>
    </>
  );
}
