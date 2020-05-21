import React from 'react';
import { Route } from 'react-router-dom';
import NotesList from '../NotesList/NotesList';
import Folder from '../Folder/Folder';
import Note from '../Note/Note';
import './Main.css';

const Main = (props) => {
    return (
        <main>
            <Route 
                exact path="/"
                component={NotesList}
                // render={() => <NotesList store={props.store} />}
            />
            <Route 
                path="/note/:noteId"
                component={Note}
                // render={routeProps => <Note notes={props.store.notes} {...routeProps} />}
            />
            <Route
                path="/folder/:folderId"
                component={Folder}
                // render={routeProps => <Folder store={props.store} {...routeProps} />}
            />
        </main>
    );
}

export default Main;