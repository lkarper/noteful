import React from 'react';
import NotesContext from '../NotesContext';

const Note = (props) => {
    return (
        <NotesContext.Consumer>
            {value => {

                const note = value.store.notes.find(n => 
                    n.id === props.match.params.noteId
                );

                return (
                    <section className="notes">
                        <h2>{note.name}</h2>
                        <p>{`Last modified on: ${(new Date(note.modified)).toString()}`}</p>
                        <button type="button">Delete Note</button>
                        <p>{note.content}</p>
                    </section>
                );
            }}
        </NotesContext.Consumer>
    );
}

export default Note;