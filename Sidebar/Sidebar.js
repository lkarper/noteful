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
                // render={(routeProps) => <SidebarLinks store={store} {...routeProps} />}
            />
            <Route 
                path="/note/:noteId"
                component={NotesSidebar}
                // render={(routeProps) => <NotesSidebar store={store} {...routeProps} />} 
            />    
        </>
    );
}

export default Sidebar;