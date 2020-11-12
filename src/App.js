import React, {Component} from 'react'
import {HashRouter as Router, Route, Switch} from "react-router-dom"
import Contacts from './Components/Contacts'
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "./context";
import AddContact from "./Components/AddContact"
import EditContact from "./Components/EditContact"
import About from "./Components/About"
import NotFound from "./Components/NotFound"

//had to change the browserRouter to hashrouter beacsue of problem navigating the pages or route using browserRouter with github pages

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
        <div className= "App">
          <Header heading = "Contact Manager"/>
          <div className="container">
            <Switch>
              <Route exact path= "/" component={Contacts} />
              <Route exact path= "/about" component={About} />
              <Route  exact path= "/contact/add" component={AddContact} />
              <Route  exact path= "/contact/edit/:id" component={EditContact} />
              <Route Component={NotFound} />
            </Switch>
          </div>
        </div>
        </Router>
      </Provider>
    )
  }
}

export default App;