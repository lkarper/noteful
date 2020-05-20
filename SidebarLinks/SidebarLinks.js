import React from 'react';
import { NavLink } from 'react-router-dom';


const SidebarLinks = (props) => {
    const { store } = props;
    const links = store.folders.map(folder =>
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
}

export default SidebarLinks;