import React from 'react';
import NotesContext from '../NotesContext';

const Note = (props) => {

    const deleteNoteRequest = (noteId, cb) => {
        fetch(`http://localhost:9090/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            throw new Error (response.statusText)
        })
        .then(data => {
            props.history.push('/');
            cb(noteId);
        });
    }

    return (
        <NotesContext.Consumer>
            {value => {
                const note = value.notes.find(n => 
                    n.id === props.match.params.noteId
                );

                return (
                    <section className="notes">
                        <h2>{note.name}</h2>
                        <p>{`Last modified on: ${(new Date(note.modified)).toString()}`}</p>
                        <button 
                            type="button"
                            onClick={() => deleteNoteRequest(note.id, value.deleteNote)}    
                        >Delete Note</button>
                        <p>{note.content}</p>
                    </section>
                );
            }}
        </NotesContext.Consumer>
    );
}

export default Note;