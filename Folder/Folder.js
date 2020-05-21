import React from 'react';
import ShortNote from '../ShortNote/ShortNote';
import NotesContext from '../NotesContext';

const Folder = (props) => {
    return (
        <NotesContext.Consumer>
            {value => {
                const notes = value.store.notes
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
            }}
        </NotesContext.Consumer>
    );
}

export default Folder;