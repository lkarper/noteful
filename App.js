import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import NotesContext from './NotesContext';
import './App.css';

class App extends React.Component {

  static contextType = NotesContext;

  state = {
    store: this.context.store
  }

  render() { 
    return (
      <div className="App">
        <Header />
        <div className="content">
          <Sidebar store={this.state.store} />
          <Main store={this.state.store} />
        </div>
      </div>
    );
  }
}

export default App;
