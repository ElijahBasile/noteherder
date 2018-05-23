import React from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      currentNote: this.blankNote(),
      notes: [],
    }
  }

  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }
  }

  setCurrentNote = (note) => {
    this.setState({ currentNote: note })
  }

  resetCurrentNote = () => {
    this.setCurrentNote(this.blankNote())
  }

  componentWillMount() {
    localStorage.getItem('notes') && this.setState({
      notes: JSON.parse(localStorage.getItem('notes'))
    })

    localStorage.getItem('currentNote') && this.setState({
      currentNote: JSON.parse(localStorage.getItem('currentNote'))
    })
  }

  componentDidMount() {
    if(localStorage.getItem('notes')) {
      console.log('Using Data from local storage')
    }
  }

  componentWillUpdate(nextprops,nextState) {
    localStorage.setItem('notes', JSON.stringify(nextState.notes))
    localStorage.setItem('currentNote', JSON.stringify(nextState.currentNote))
  }

  saveNote = (note) => {
    const notes = [...this.state.notes]

    if (!note.id) {
      // new note
      note.id = Date.now()
      notes.push(note)
    } else {
      // existing note
      const i = notes.findIndex(currentNote => currentNote.id === note.id)
      notes[i] = note
    }

    this.setState({ notes })
    this.setCurrentNote(note)
  }

  deleteItem = (note) => {
    const notes = [...this.state.notes]

    const i = notes.findIndex(currentNote => currentNote.id === note.id)
    if(i !== -1) {
      notes.splice(i,1)
    }

    this.setState({ notes })
    this.setCurrentNote(this.blankNote())
  }

  render() {
    return (
      <div className="Main" style={style}>
        <Sidebar resetCurrentNote={this.resetCurrentNote} />
        <NoteList
          notes={this.state.notes}
          setCurrentNote={this.setCurrentNote}
        />
        <NoteForm
          currentNote={this.state.currentNote}
          saveNote={this.saveNote} deleteItem={this.deleteItem}
        />
      </div>
    )
  }
}

const style = {
  display: 'flex',
  height: '100vh',
  alignItems: 'stretch',
}

export default Main