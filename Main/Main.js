import React from 'react';
import { Route } from 'react-router-dom';
import NotesList from '../NotesList/NotesList';
import Folder from '../Folder/Folder';
import Note from '../Note/Note';
import AddFolder from '../AddFolder/AddFolder';
import AddNote from '../AddNote/AddNote';
import NotesError from '../NotesError/NotesError';
import AddFolderError from '../AddFolderError/AddFolderError';
import AddNoteError from '../AddNoteError/AddNoteError';
import './Main.css';

const Main = () => {
    return (
        <main>
            <NotesError>
                <Route 
                    exact path="/"
                    component={NotesList}
                />
                <Route 
                    path="/note/:noteId"
                    component={Note}
                />
                <Route
                    path="/folder/:folderId"
                    component={Folder}
                />
            </NotesError>
            <AddFolderError>
                <Route
                    path="/add-folder"
                    component={AddFolder}
                />
            </AddFolderError>
            <AddNoteError>
                <Route
                    path="/add-note"
                    component={AddNote}
                />
            </AddNoteError>
        </main>
    );
}

export default Main;