import React from 'react';
import store from './store';

const NotesContext = React.createContext({
    store,
});

export default NotesContext;