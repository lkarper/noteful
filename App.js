import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import STORE from './store';
import './App.css';

class App extends React.Component {

  state = {
    store: STORE
  }

  render() { 
    return (
      <div className="App">
        <Header />
        <div className="content">
          <Sidebar store={this.state.store} />
          <Main store={this.state.store} />
        </div>
      </div>
    );
  }
}

export default App;
