import React, { Component } from 'react';
import cuid from 'cuid';
import NotesContext from '../NotesContext';
import ValidationError from '../ValidationError';

class AddNote extends Component {

    static contextType = NotesContext;

    state = {
        name: {
            value: '',
            touched: false,
        },
        folderId: {
            value: this.props.location.state.folderId,
            touched: this.props.location.state.folderId || false
        },
        content: {
            value: '',
            touched: false,
        },
        error: null,
    }

    updateName = (name) => {
        this.setState({
            name: {
                value: name,
                touched: true,
            },
        });
    }

    updateFolderId = (folderId) => {
        this.setState({
            folderId: {
                value: folderId,
                touched: true,
            },
        });
    }

    updateContent = (content) => {
        this.setState({
            content: {
                value: content,
                touched: true,
            },
        });
    }

    handleAddNote = (event, cb) => {
        event.preventDefault();
        const newNote = {
            id: cuid(),
            name: this.state.name.value,
            modified: (new Date()).toJSON(),
            folderId: this.state.folderId.value,
            content: this.state.content.value,
        };

        fetch('http://localhost:9090/notes', {
            method: 'POST',
            body: JSON.stringify(newNote),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error(response.message);
            })
            .then(data => {
                cb(data);
                this.props.history.push(`/note/${data.id}`);
            })
            .catch(error => {
                console.log(error);
                this.setState({ error: error.message });
            });
    }

    validateNoteName = () => {
        const name = this.state.name.value.trim();
        if (name.length === 0) {
            return 'The note must be named and the name must contain at least one character.';
        }
    }

    validateFolderChoice = () => {
        if (!this.state.folderId) {
            return 'You must select a folder in which to place your note.';
        }
    }

    validateContent = () => {
        const content = this.state.content.value.trim();
        if (content.length === 0) {
            return 'You must add content to your note and it must contain at least one character.';
        }
    }

    render() {
        const folderRadios = this.context.folders.map(folder => 
                <div key={folder.id}>
                    <input 
                        type="radio" 
                        id={folder.id} 
                        name="folder" 
                        value={folder.id} 
                        onChange={e => this.updateFolderId(e.currentTarget.value)} 
                        checked={this.state.folderId.value === folder.id}
                        required 
                    />
                    <label htmlFor={folder.id}>{folder.name}</label>
                </div>
            );

        const nameError = this.validateNoteName();
        const folderError = this.validateFolderChoice();
        const contentError = this.validateContent();

        const { error } = this.state;
        const errorHTML = (
            <div className="folder-error">
                <h2>Looks like something went wrong: {error}.</h2>
                <p> Please try again later.</p>
            </div>
        );

        return (
            <>
                <form onSubmit={e => this.handleAddNote(e, this.context.addNote)}>
                    <label htmlFor="add-note">Enter name for a new note: </label>
                    <input type="text" id="add-note" name="add-note" onChange={e => this.updateName(e.currentTarget.value)} required />
                    {this.state.name.touched && <ValidationError message={nameError} />}
                    <fieldset>
                        <legend>Select a folder to put the new note in: </legend>
                        {folderRadios}
                    </fieldset>
                    {this.state.folderId.touched && <ValidationError message={folderError} />}
                    <label htmlFor="content">Enter note content here:</label>
                    <textarea id="content" name="content" rows="5" cols="50" onChange={e => this.updateContent(e.currentTarget.value)} required>(Type your note here...)</textarea>
                    {this.state.content.touched && <ValidationError message={contentError} />}
                    <button type="submit">Add Note</button> 
                </form>
                {error ?  errorHTML : ''}
            </>
        );
    }
}

export default AddNote;