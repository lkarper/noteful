import React from 'react';
import { Route } from 'react-router-dom';
import SidebarLinks from '../SidebarLinks/SidebarLinks';
import NotesSidebar from '../NotesSidebar/NotesSidebar';
import './Sidebar.css';

const Sidebar = (props) => {
    const { store } = props;
    return (
        <>
            <Route 
                exact path={["/", "/folder/:folderId"]}
                render={(routeProps) => <SidebarLinks store={store} {...routeProps} />}
            />
            <Route 
                path="/note/:noteId"
                render={(routeProps) => <NotesSidebar store={store} {...routeProps} />} 
            />    
        </>
    );
}

export default Sidebar;