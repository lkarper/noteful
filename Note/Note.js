import React, { Component } from 'react';
import NotesContext from '../NotesContext';

class Note extends Component {

    state = {
        error: null,
    }

    static contextType = NotesContext;

    deleteNoteRequest = (noteId, cb) => {
        fetch(`http://localhost:9090/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.message);
        })
        .then(data => {
            this.props.history.push('/');
            cb(noteId);
        })
        .catch(error => {
            console.log(error);
            this.setState({ error: error.message });
        });
    }

    render() {
        const error = this.state.error;
        const errorHTML = (
            <div>
                <h2>Could not delete note: {error}.</h2>
                <p>Check your connection and try again.</p>
            </div>
        );

        const note = this.context.notes.find(n => n.id === this.props.match.params.noteId);

        return (
            <section className="notes">
                <h2>{note.name}</h2>
                <p>{`Last modified on: ${(new Date(note.modified)).toString()}`}</p>
                <button 
                    type="button"
                    onClick={() => this.deleteNoteRequest(note.id, this.context.deleteNote)}    
                >Delete Note</button>
                {error ? errorHTML : ''}
                <p>{note.content}</p>
            </section>
        );
    }
}

export default Note;