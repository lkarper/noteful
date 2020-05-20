import React from 'react';
import ShortNote from '../ShortNote/ShortNote';

const NotesList = (props) => {
    const { store } = props;

    const notes = store.notes.map((note) => 
        <ShortNote key={note.id} note={note} />
    );
    return (
        <section className="notes">
            <ul>
                {notes}
            </ul>
            <button type="button">Add note</button>
        </section>
    );
}

export default NotesList;