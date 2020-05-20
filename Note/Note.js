import React from 'react';


const Note = (props) => {
    const { notes } = props;

    const note = notes.find(n => 
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
}

export default Note;