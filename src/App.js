import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import './App.scss';

import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Login from './components/Login/login';
import SearcherUsersList from './components/SearcherUsersList/SearcherUsersList';

class App extends Component {
  render() {
    return (
      <div className="ui container App" >        
        <BrowserRouter>
          <Header/>

          <Route path="/" exact component={Login}/>
          {/* <Route path="/options" exact component={{}}/> */}
          <Route path="/users" exact component={SearcherUsersList}/>

          <Footer/>
        </BrowserRouter>        
      </div>
    );
  }
}

export default App;
