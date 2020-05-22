import React from 'react';
import { Link } from 'react-router-dom';
import ShortNote from '../ShortNote/ShortNote';
import NotesContext from '../NotesContext';

const NotesList = (props) => {
    return (
        <NotesContext.Consumer>
            {value => {
                const notes = value.notes.map((note) => 
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
                                    folderId: null
                                }
                            }}
                        >
                            Add note
                        </Link>
                    </section>
                );
            }}
        </NotesContext.Consumer>
    );
}

export default NotesList;