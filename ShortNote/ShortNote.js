import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NotesContext from '../NotesContext/NotesContext';
import './ShortNote.css';

class ShortNote extends Component {

    state = {
        error: null,
    }

    static contextType = NotesContext;

    static defaultProps = {
        note: {
            name: "Placeholder name",
            id: "PlaceholderId", 
            modified: (new Date()).toJSON(), 
            folderId: "PlaceholderFolderId", 
            content: "Lorem ipsum...",
        },
    }

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

        const { note } = this.props;
        const date = new Date(note.modified);

        return (
            <li>
                <Link to={`/note/${note.id}`}>
                    {note.name}
                </Link>
                <p>{`Last modified on: ${date.toString()}`}</p>
                <button 
                    type="button"
                    onClick={() => this.deleteNoteRequest(note.id, this.context.deleteNote)}    
                >Delete Note</button>
                {error ? errorHTML : ''}
            </li>
        );
    }
}

ShortNote.propTypes = {
    note: PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.string,
        modified: PropTypes.string,
        folderId: PropTypes.string,
        content: PropTypes.string,
    }).isRequired,
}

export default ShortNote;