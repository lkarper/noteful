import React from 'react';
import { NavLink } from 'react-router-dom';
import NotesContext from '../NotesContext';

const NotesSidebar = (props) => {
    return (
        <NotesContext.Consumer>
            {value => {
                const error = value.folderError;
                const errorHTML = (
                    <div className="folder-load-error">
                        <h2>Sorry, could not load folders from the server: {error}.</h2>
                        <p>Check your network connection and reload the page.</p>
                    </div>
                );
                const folderIdToMatch = value.notes
                    .find(note => note.id === props.match.params.noteId)
                    .folderId;

                const folder = value.folders.find(f => f.id === folderIdToMatch);

                return (
                    <nav className="sidebar">
                        {error ? errorHTML : ''}
                        <NavLink
                            className="folder-link"
                            activeClassName="highlighted"
                            to={`/folder/${folder.id}`}
                        >
                            {folder.name}
                        </NavLink>
                        <button 
                            type="buton"
                            onClick={() => props.history.push(`/folder/${folder.id}`)}
                        >
                            Back to folder
                        </button>
                    </nav>
                );
            }}
        </NotesContext.Consumer>
    );
}

export default NotesSidebar;