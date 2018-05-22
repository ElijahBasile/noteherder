import React from "react";

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          noteTitle: "Kohlrabi welsh",
          noteBody:
            "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic."
        },
        {
          noteTitle: "Dandelion cucumber",
          noteBody:
            "Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini."
        },
        {
          noteTitle: "Prairie turnip",
          noteBody:
            "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip."
        }
      ]
    };
  }
  render() {
    return (
      <div className="NoteList" style={styles.noteList}>
        <h3 style={styles.noteListh3}>Notes</h3>
        <ul id="notes" style={styles.noteListul}>
          {this.state.notes.map(note => {
            return (
              <div className="note" 

              onMouseOver={e => e.currentTarget.style = styles.noteListhover}

              onMouseOut={e => e.currentTarget.style = styles.NoteListulli} >

                <a className="active" style={styles.NoteListulli}>
                  <li>
                    <div className="note" >
                      <div className="note-title" style={styles.noteListTitle}>{note.noteTitle}</div>
                      <div className="note-body"style={styles.noteListbody} >
                        <p>{note.noteBody}</p>
                      </div>
                    </div>
                  </li>
                </a>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}




const styles = {
  noteList: {
    borderLeft: '1px solid #eee',
    borderRight: '1px solid #eee',
    width: '30rem',
  },
  noteListh3: {
    color: '#999',
    textTransform: 'uppercase',
    fontSize: '2rem',
    fontFamily: 'Oxygen',
    fontWeight: '300',
    letterSpacing: '3px',
    margin: '20px 2rem',
  },
  noteListul: {
    borderTop: '1px solid #eee',
    overflowY: 'scroll',
    height: 'calc(100vh - 72px)',
    listStyle: 'none',
    marginTop: '1em',
    padding: '0',
    width: '100%',
    color: '#999',
  },
  NoteListulli: {
    borderTop: '1px solid #eee',
    margin: '0 2rem',
    padding: '1rem 4px'
  },
  noteListbody: {
    height: '54px',
    overflow: 'hidden',
    marginTop: '.5rem',
  },
  noteListnote: {
    display: 'block',
    height: '100px',
    padding: '1em',
    textDecoration: 'none',
  },
  noteListTitle: {
    color: '#4a4a4a',
    fontFamily: 'Fauna One',
    fontSize: '120%',
    fontWeight: '400',
    whiteSpace: 'nowrap',
    overflowX: 'hidden',
    textOverflow: 'ellipsis',
  },
  noteListhover: {
    backgroundColor: '#008bf8',
    color: '#fff',
    textDecoration: 'none',
  }
}

export default NoteList;
