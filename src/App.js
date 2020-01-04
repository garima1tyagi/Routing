import React, {Component} from 'react';
import Nav from './Nav/nav';
import About from './About/about';
import Setting from './Setting/Setting';
import Contact from './Contact/contact';
import Topics from './Topics/Topics';
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
      <Route path= "/about" component={About} />
      <Route path= "/setting" component={Setting} />
      <Route path= "/contact" component={Contact} />
      <Route path= "/topics" component={Topics} />

  
      </Switch>
    </div>
    </Router>
  );
}
}

export default App;
