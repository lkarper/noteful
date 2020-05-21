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
    const contextValue = {
      store: this.state.store
    }
    return (
      <NotesContext.Provider
        value={contextValue}
      >
        <div className="App">
          <Header />
          <div className="content">
            <Sidebar />
            <Main />
          </div>
        </div>
      </NotesContext.Provider>
    );
  }
}

export default App;
