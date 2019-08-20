import React, { Component } from 'react';
import './App.scss';
import SearcherUsersList from './components/SearcherUsersList/SearcherUsersList';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <SearcherUsersList />
      </div>
    );
  }
}

export default App;
