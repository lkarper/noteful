import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const NotesSidebar = (props) => {
    const { store } = props;
    const folderIdToMatch = store.notes
        .find(note => note.id === props.match.params.noteId)
        .folderId;

    const folder = store.folders.find(f => f.id === folderIdToMatch);

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
}

export default withRouter(NotesSidebar);