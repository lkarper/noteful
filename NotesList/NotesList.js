import React from 'react';
import { Link } from 'react-router-dom';
import ShortNote from '../ShortNote/ShortNote';
import NotesContext from '../NotesContext';

const NotesList = () => {
    return (
        <NotesContext.Consumer>
            {value => {
                const error = value.noteError;
                const errorHTML = (
                    <li className="notes-load-error">
                        <h2>Sorry, could not fetch notes from server: {error}.</h2>
                        <p>Check your connection and reload the page.</p>
                    </li>
                );

                const notes = value.notes.map((note) => 
                    <ShortNote key={note.id} note={note} />
                );

                return (
                    <section className="notes">
                        <ul>
                            {notes}
                            {error ? errorHTML : ''}
                        </ul>
                        <Link 
                            to={{
                                pathname: "/add-note",
                                state: {
                                    folderId: null,
                                },
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