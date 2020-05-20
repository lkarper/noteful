import React from 'react';
import { Link } from 'react-router-dom';
import './ShortNote.css';

const ShortNote = (props) => {
    const { note } = props;
    const date = new Date(note.modified);
    return (
        <li>
            <Link to={`/note/${note.id}`}>
                {note.name}
            </Link>
            <p>{`Last modified on: ${date.toString()}`}</p>
            <button type="button">Delete Note</button>
        </li>
    );
}

export default ShortNote;