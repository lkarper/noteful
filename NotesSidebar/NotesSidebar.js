import React from 'react';
import { NavLink } from 'react-router-dom';
import NotesContext from '../NotesContext';

const NotesSidebar = (props) => {
    return (
        <NotesContext.Consumer>
            {value => {
                const folderIdToMatch = value.store.notes
                    .find(note => note.id === props.match.params.noteId)
                    .folderId;

                const folder = value.store.folders.find(f => f.id === folderIdToMatch);

                return (
                    <nav className="sidebar">
                        <NavLink
                            className="folder-link"
                            activeClassName="highlighted"
                            to={`/folder/${folder.id}`}
                        >
                            {folder.name}
                        </NavLink>
                        <button 
                            type="buton"
                            onClick={() => props.history.goBack()}
                        >
                            Go back
                        </button>
                    </nav>
                );
            }}
        </NotesContext.Consumer>
    );
}

export default NotesSidebar;