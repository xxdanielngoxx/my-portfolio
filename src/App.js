import React, { Fragment } from 'react';
import './App.css';
import { Home } from './components/Home';
import { Route } from 'react-router-dom';
import { Resume } from './components/Resume';
import { CssBaseline } from '@material-ui/core';
import { Contact } from './components/Contact';
import { Portfolio } from './components/Portfolio';

const App = () => {
  return (
    <Fragment>
      <CssBaseline/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/portfolio" component={Portfolio}/>
      <Route exact path="/contact" component={Contact}/>
    </Fragment>
  );
}

export default App;
