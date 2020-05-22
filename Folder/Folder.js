import React from 'react';
import { Link } from 'react-router-dom';
import ShortNote from '../ShortNote/ShortNote';
import NotesContext from '../NotesContext';

const Folder = (props) => {
    return (
        <NotesContext.Consumer>
            {value => {
                const notes = value.notes
                    .filter(note => note.folderId === props.match.params.folderId)
                    .map(note =>
                        <ShortNote key={note.id} note={note} />
                    );
                
                return (
                    <section className="notes">
                        <ul>
                            {notes}
                        </ul>
                        <Link 
                            to={{
                                pathname: "/add-note",
                                state: {
                                    folderId: props.match.params.folderId
                                }
                            }}
                        >
                            Add note
                        </Link>
                    </section>
                )
            }}
        </NotesContext.Consumer>
    );
}

export default Folder;