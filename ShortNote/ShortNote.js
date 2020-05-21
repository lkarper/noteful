import React from 'react';
import { Link } from 'react-router-dom';
import NotesContext from '../NotesContext';
import './ShortNote.css';

const ShortNote = (props) => {
    return (
        <NotesContext.Consumer>
            {value => {
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
                        cb(noteId);
                    });
                }

                const { note } = props;
                const date = new Date(note.modified);
                return (
                    <li>
                        <Link to={`/note/${note.id}`}>
                            {note.name}
                        </Link>
                        <p>{`Last modified on: ${date.toString()}`}</p>
                        <button 
                            type="button"
                            onClick={() => deleteNoteRequest(note.id, value.deleteNote)}    
                        >Delete Note</button>
                    </li>
                );
            }}
        </NotesContext.Consumer>    
    );
}

export default ShortNote;