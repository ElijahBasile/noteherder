import React, { Component } from 'react'

import './NoteForm.css'

class NoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      note: this.blankNote(),
    }
  }

  componentDidUpdate = () => {
    //get the ID from the URL
    const newId = this.props.match.params.id || ''

    //get the previous ID from state
    const oldId = this.state.note.id || ''

    //continue only if they're different
    if (newId !== oldId.toString()) {
      //find the note with that ID
      const i = this.props.notes.findIndex(currentNote => currentNote.id.toString() === newId)
      const note = this.props.notes[i] || this.blankNote()

      //update state with that note
      if(note.id !== this.state.note.id) {
        this.setState({ note })
      }
    }
  }

  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }
  }

  handleChanges = (ev) => {
    const note = {...this.state.note}
    note[ev.target.name] = ev.target.value
    this.setState(
      { note },
      () => this.props.saveNote(note)
    )
  }

  render() {
    const { removeNote } = this.props
    return (
      <div className="NoteForm">
        <div className="form-actions">
          <button
            type="button"
            onClick={() => removeNote(this.state.note)}
          >
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
        <form>
          <p>
            <input
              type="text"
              name="title"
              placeholder="Title your note"
              value={this.state.note.title}
              onChange={this.handleChanges}
            />
          </p>

          <textarea
            name="body"
            value={this.state.note.body}
            onChange={this.handleChanges}
          ></textarea>
        </form>
      </div>
    )
  }
}

export default NoteForm