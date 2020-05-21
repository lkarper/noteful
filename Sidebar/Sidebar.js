import React from 'react';
import { Route } from 'react-router-dom';
import SidebarLinks from '../SidebarLinks/SidebarLinks';
import NotesSidebar from '../NotesSidebar/NotesSidebar';
import './Sidebar.css';

const Sidebar = () => {
    
    return (
        <>
            <Route 
                exact path={["/", "/folder/:folderId"]}
                component={SidebarLinks}
            />
            <Route 
                path="/note/:noteId"
                component={NotesSidebar}
            />    
        </>
    );
}

export default Sidebar;