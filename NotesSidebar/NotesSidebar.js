import React from 'react';
import { NavLink } from 'react-router-dom';
import NotesContext from '../NotesContext';

const NotesSidebar = (props) => {
    return (
        <NotesContext.Consumer>
            {value => {
                const folderIdToMatch = value.notes
                    .find(note => note.id === props.match.params.noteId)
                    .folderId;

                const folder = value.folders.find(f => f.id === folderIdToMatch);

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
                            onClick={() => props.history.push(`/folder/${folder.id}`)}
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