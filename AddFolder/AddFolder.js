import React, { Component } from 'react';
import cuid from 'cuid';
import NotesContext from '../NotesContext';

class AddFolder extends Component {

    static contextType = NotesContext;

    state = {
        folder: {
            name: '',
            touched: false
        }
    }

    handleNewFolder = (event, cb) => {
        event.preventDefault();
        const newFolder = {
            name: this.state.folder.name,
            id: cuid()
        };

        fetch('http://localhost:9090/folders', {
            method: 'POST',
            body: JSON.stringify(newFolder),
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
            });
    }

    updateFolderName = (name) => {
        this.setState({
            folder: {
                name,
                touched: true
            }
        });
    }

    render() {
        return(
            <form onSubmit={event => this.handleNewFolder(event, this.context.addFolder)}>
                <label htmlFor="folder-name">Enter a name for a new folder:</label>
                <input type="text" id="folder-name" name="folder-name" onChange={e => this.updateFolderName(e.currentTarget.value)} required />
                <button type="submit">Create Folder</button>
            </form>
        )
    }
}

export default AddFolder;