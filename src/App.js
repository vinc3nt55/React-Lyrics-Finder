import React, { Component } from 'react';
import Navbar from './components/Layout/Navbar';
import Index from './components/Layout/Index';
import Lyrics from './components/tracks/Lyrics';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from './Context';
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Navbar />

            <div className="container">
              <Switch>
                  <Route exact path="/" component={Index} />
                  <Route exact path="/lyrics/track/:id" component={Lyrics} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
