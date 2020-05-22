import React, { Component } from 'react';
import NotesContext from '../NotesContext';
import cuid from 'cuid';

class AddNote extends Component {

    static contextType = NotesContext;

    state = {
        name: '',
        folderId: this.props.location.state.folderId,
        content: '' 
    }

    updateName = (name) => {
        this.setState({
            name
        });
    }

    updateFolderId = (folderId) => {
        this.setState({
            folderId
        });
    }

    updateContent = (content) => {
        this.setState({
            content
        });
    }

    handleAddNote = (event, cb) => {
        event.preventDefault();
        const newNote = {
            id: cuid(),
            name: this.state.name,
            modified: (new Date()).toJSON(),
            folderId: this.state.folderId,
            content: this.state.content
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
            });
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
                        checked={this.state.folderId === folder.id}
                        required 
                    />
                    <label htmlFor={folder.id}>{folder.name}</label>
                </div>
            );

        return (
            <form onSubmit={e => this.handleAddNote(e, this.context.addNote)}>
                <label htmlFor="add-note">Enter name for a new note: </label>
                <input type="text" id="add-note" name="add-note" onChange={e => this.updateName(e.currentTarget.value)} required/>
                <fieldset>
                    <legend>Select a folder to put the new note in: </legend>
                    {folderRadios}
                </fieldset>
                <label htmlFor="content">Enter note content here:</label>
                <textarea id="content" name="content" rows="5" cols="50" onChange={e => this.updateContent(e.currentTarget.value)} required></textarea>
                <button type="submit">Add Note</button> 
            </form>
        );
    }
}

export default AddNote;