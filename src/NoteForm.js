import React from "react";

class NoteForm extends React.Component {
  render() {
    return (
      <div className="NoteList">
        <div class="NoteForm">
          <div class="form-actions">
            <button type="button">
              <i class="fa fa-trash-o" />
            </button>
          </div>
          <form>
            <p>
              <input type="text" name="title" placeholder="Title your note" />
            </p>
            <textarea name="body" />
          </form>
        </div>
      </div>
    );
  }
}

export default NoteForm;
