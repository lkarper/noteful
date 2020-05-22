import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import NotesContext from './NotesContext';
import './App.css';

class App extends React.Component {

  static contextType = NotesContext;

  state = {
    folders: [],
    notes: []
  }

  deleteNote = (noteId) => {
    const newNotes = this.state.notes.filter(n => n.id !== noteId);
    this.setState({
      notes: newNotes
    });
  }

  addFolder = (folder) => {
    this.setState({
      folders: [...this.state.folders, folder]
    })
  }

  componentDidMount() {
    fetch('http://localhost:9090/folders')
      .then(response => {
        if(response.ok) {
          return response.json()
        }
        throw new Error(response.message)
      })
      .then(folders => {
        this.setState({
          folders
        })
      });
      
    fetch('http://localhost:9090/notes')
      .then(response => {
        if(response.ok) {
          return response.json()
        }
        throw new Error(response.statusText)
      })
      .then(notes => {
        this.setState({
          notes
        })
      });

  }

  render() { 
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.deleteNote,
      addFolder: this.addFolder,
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
