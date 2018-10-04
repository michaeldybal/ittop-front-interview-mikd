import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import NotFoundPage from './pages/404';
import Header from './presentational/header/Header';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms" component={Rooms} />
          <Route component={NotFoundPage} status={404} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
