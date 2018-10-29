import React from 'react';
import context from './MyContext';

const Note = ({note}) => (
  <context.Consumer>
    {
      (cont) => {
        return(
          <div>
            <h3>{note.title}</h3>
            <p>{note.text}</p>
            <input
              type="checkbox"
              checked={note.done}
              onClick={() => cont.updateNote(note)}
            />
            <b>{note.done.toString()}</b>
          </div>
        )
      }
    }
  </context.Consumer>
);

export default Note;
