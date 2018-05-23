import React from "react";

import "./NoteForm.css";

const NoteForm = () => {
  return (
    <div className="NoteForm">
      <div className="form-actions">
        <button type="button">
          <i className="far fa-trash-alt" />
        </button>
      </div>
      <form>
        <p>
          <input 
            type="text" 
            name="title" 
            placeholder="Title your note" />
        </p>

        <textarea name="body" />
      </form>
    </div>
  );
};

export default NoteForm;
