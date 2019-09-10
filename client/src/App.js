import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Search from './pages/Search';
import Saved from './pages/Saved';
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route component={Search} />
        </Switch>
      </Router>
        
      </>
    );
  }
}

export default App;
