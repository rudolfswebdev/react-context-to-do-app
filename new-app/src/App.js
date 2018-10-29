import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Provider from './Provider';
import NoteList from './NoteList';

class App extends Component {
  render() {

    return (
      <Provider>
      <div className="App">
        <NoteList/>
      </div>
    </Provider>
    );
  }
}

export default App;
