import React, { Component } from 'react';
import context from './MyContext';
import notes from './noteStorage';


class Provider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notes
    }
  }

  updateNote = (newNote) => {
    newNote.done = !newNote.done;
    const tempNotes = this.state.notes;
    const noteIndex = tempNotes.findIndex(x => x.id === newNote.id);
    tempNotes[noteIndex] = newNote;

    this.setState ({
      notes: tempNotes
    })
    console.log(tempNotes);
}
  render() {
    return(
      <context.Provider value={{ state: this.state,
                                  updateNote: this.updateNote
      }}>
        {this.props.children}
      </context.Provider>
    );
  }

}

export default Provider;
