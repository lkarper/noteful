import React from 'react';
import ShortNote from '../ShortNote/ShortNote';

const Folder = (props) => {
    const notes = props.store.notes
        .filter(note => note.folderId === props.match.params.folderId)
        .map(note =>
            <ShortNote key={note.id} note={note} />
        );
    
    return (
        <section className="notes">
            <ul>
                {notes}
            </ul>
            <button type="button">Add note</button>
        </section>
    )
}

export default Folder;