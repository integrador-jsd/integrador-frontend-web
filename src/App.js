import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';

import './App.scss';

import Header from './components/Header/header';
import PrivateRouter from './components/PrivateRouter/privateRouter';

class App extends Component {
  render() {
    return (
      <div className="ui container App" >        
        <BrowserRouter>
          <Header/>
          <PrivateRouter />
        </BrowserRouter>        
      </div>
    );
  }
}

export default App;
