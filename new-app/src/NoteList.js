import React, { Component } from 'react';
import context from './MyContext';
import Note from './Note';

class NoteList extends Component {
  render() {

    return <div className="Child">
      <context.Consumer>
        {
          (cont) => {
            return (
              <div>
                {cont.state.notes.map((note) =>
                  <Note note={note} />
                  )
                }

              </div>
            );
          }
        }
      </context.Consumer>
    </div>;
  }
}

export default NoteList;