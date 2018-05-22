import React from "react";

class NoteForm extends React.Component {
  render() {
    return (
        <div className="NoteForm">
          <div className="form-actions">
            <button type="button" style={styles.button}>
              <i className="fa fa-trash-o" />
            </button>
          </div>
          <form>
            <p>
              <input type="text" name="title" placeholder="Title your note" style={styles.input}/>
            </p>
            <textarea name="body" style={styles.textarea}/>
          </form>
        </div>
    );
  }
}

const styles = {
  button: {
    border: 'none',
    background: 'none',
    padding: '0',
    color: '#999',
    fontSize: '2rem',
    margin: '0',
  },
  submit: {
    backgroundColor: '#008bf8',
    borderRadius: '4px',
    color: '#fff',
    fontSize: '1.4rem',
    padding: '1rem',
  },
  input: {
    border: 'none',
    fontSize:' 200%',
    fontFamily: '"Fauna One"',
    color: '#008bf8',
    fontWeight: '400',
    width: '100%',
    outline: 'none',
  },
  textarea: {
    borderColor: '#eee',
    width: '100%',
    height: 'calc(100vh - 140px)',
    fontSize: '1.3em',
  }
}


export default NoteForm;
