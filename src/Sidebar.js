import React from 'react'

import quill from './quill.svg'
import newIcon from './new.png'
import newHover from './new-hover.png'

class Sidebar extends React.Component {
    render() {
        return (
            <div 
                className="SideBar" 
                style={styles.sidebar}>
                <div className='logo' style={styles.logo}>
                    <img src={quill} alt="NoteHerder" style={styles.logoImg}/>
                </div>

                <a href="/notes" style={styles.newNote}>
                    <img src={newIcon} style={styles.newNote} onMouseOver={e => (e.currentTarget.src = newHover)} onMouseOut={e => (e.currentTarget.src = newIcon)} alt="new note"/>
                </a>
                <br/>
                <div className="SignOut">
                    <button>
                        <i className="fa fa-sign-out"></i>
                    </button>
                </div>
            </div>
        )
    }
}

const styles = {
    sidebar: {
        width: '6rem',
        backgroundColor: '#f3f3f3',
        padding: '0.5rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo: {
        fontFamily: '"Fauna One"',
        color: '#666',
        fontSize: '3rem',
    },
    logoImg: {
        width: '3rem',
        paddingLeft:'0.4rem',
    },
    newNote: {
        marginTop: '2rem',
        position: 'relative',
        width: '4rem',
    },
    button: {
        backgroundColor: 'transparent',
        border: '0',
        color: '#008BF8',
        cursor: 'pointer',
      },
    transition: {
        position: 'absolute',
        left: '0',
        width: '100%',
        transition: 'opacity 0.25s ease-in-out',
        opacity: '0',
      },
    hover: {
        opacity: '0',
      },
}

export default Sidebar
