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
      <div className="NoteList">
        <h3>Notes</h3>
        <ul id="notes">
          {this.state.notes.map(note => {
            return (
              <div className="note">
                <a class="active">
                  <li>
                    <div className="note">
                      <div className="note-title">{note.noteTitle}</div>
                      <div className="note-body">
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

export default NoteList;
