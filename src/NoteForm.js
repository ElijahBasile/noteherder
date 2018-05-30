import React, { Component } from 'react'

import './NoteForm.css'

class NoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      note: 
    }
  }

  blankNote() {
    title: '',
    body: '',
    id: null,
  }


  const handleChanges = (ev) => {
    const note = {...this.state.note}
    note[ev.target.name] = ev.target.value
    this.setState(
      { note },
      () => this.props.saveNote(note)
    )
  }

  const deleteNote = (ev) => {
    const note = {...this.state.note}
    note[ev.target.name] = ev.target.value
    deleteItem(note)
  }

  render() {
  const { currentNote, saveNote, deleteItem } = this.props
  return (
    <div className="NoteForm">
      <div className="form-actions">
        <button type="button" onClick={deleteNote}>
          <i 
            className="far fa-trash-alt"  
          ></i>
        </button>
      </div>
      <form>
        <p>
          <input
            type="text"
            name="title"
            placeholder="Title your note"
            value={this.state.note.title}
            onChange={handleChanges}
          />
        </p>

        <textarea
          name="body"
          value={this.state.note.body}
          onChange={handleChanges}
        ></textarea>
      </form>
    </div>
  )
}
}

export default NoteForm