import React from 'react';
import { NavLink } from 'react-router-dom';
import NotesContext from '../NotesContext';

const SidebarLinks = () => {
    return (
        <NotesContext.Consumer>
            {value => {
                const links = value.folders.map(folder =>
                    <NavLink
                        key={folder.id}
                        className='folder-link'
                        activeClassName="highlighted"
                        to={`/folder/${folder.id}`}
                    >
                        {folder.name}
                    </NavLink>
                );

                return (
                    <nav className="sidebar">
                        {links}
                        <button type="button">Add folder</button>
                    </nav>
                )
            }}
        </NotesContext.Consumer>
    );
}

export default SidebarLinks;