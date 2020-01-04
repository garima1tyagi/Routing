import React, {Component} from 'react';
import Nav from './Nav/nav';
import About from './About/about';
import Setting from './Setting/Setting';
import Contact from './Contact/contact';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

class App extends Component {
  render () {
  return (
    <Router> 
    <div className="App">
      <Nav />
      <Switch>
      <Route path= "/" exact>
      
      </Route> 
      <Route path= "/about">
      <About />
      </Route> 

      <Route path= "/setting">
      <Setting />
      </Route> 
      
      <Route path= "/contact">
      <Contact />
      </Route> 
      </Switch>
    </div>
    </Router>
  );
}
}

export default App;
