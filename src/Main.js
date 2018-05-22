import React from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

const Main = () => {
    return (
        <div className="Main" style={style}>
            <Sidebar />
            <NoteForm />
            <NoteList />
        </div>
    )
}

const style = {
    display: 'flex',
    height: '100vh',
    alignItems: 'stretch',
}

export default Main