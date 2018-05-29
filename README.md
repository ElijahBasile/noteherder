# Noteherder 

## Day 8 Homework

* make sure base.js and base.example.js are the same
* Add Google authentication

### Bonus Credit

* If you're signed in, it briefly shows the SignIn component before showing Main. Fix that!
Hint: try storing uid in localstorage.
* scope notes by user. Let each user have their own array of notes
Hint: in main, when we call syncstate, we say just ntoes there, what if the uid was part of that string? try changeing the _endpoint_ argument to base.syncState()

## Day 7 Homework

* Make the delete Button work.

## Bonus Credit 

* Persist the lsit of notes across page refreshes, using `localStorage

## Super Mega Bonus Credit

* sign up for firebase
* add the re-base library to your project 
*sync your notes with firebase
*profit.

## Day 6 Homework

* Finish styling `Sidebar`.
* Add JSX and style to `NoteList` and `NoteForm`.

### Bonus Credit

* store a list of hard-coded notes in `state`.
* use `map` to list these notes in `NoteList`.

### Super Mega Bonus Credit

* Load a note into `NoteForm` when you click it in `NoteList`
hint: use props