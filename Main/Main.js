import React from 'react';
import { Route } from 'react-router-dom';
import NotesList from '../NotesList/NotesList';
import Folder from '../Folder/Folder';
import Note from '../Note/Note';
import AddFolder from '../AddFolder/AddFolder';
import AddNote from '../AddNote/AddNote';
import './Main.css';

const Main = () => {
    return (
        <main>
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
            <Route
                path="/add-folder"
                component={AddFolder}
            />
            <Route
                path="/add-note"
                component={AddNote}
            />
        </main>
    );
}

export default Main;