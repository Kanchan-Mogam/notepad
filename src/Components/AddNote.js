import React, { useState } from "react";

const AddNote = ({ handleAddNote }) =>{
  const [noteText, setNoteText] = useState('');
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        placeholder="Type to add the note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer"></div>
      <small>{characterLimit - noteText.length} remaining</small>
      <button className="save" onClick={handleSaveClick}>
        Save
      </button>
    </div>
  );
}

export default AddNote;
