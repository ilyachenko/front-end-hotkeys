import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import App from './components/App';
import About from './components/About';

window.React = React;

render(
  (<Router>
    <Route path="/" component={App}>
      <Route path="/about" component={About}/>
    </Route>
  </Router>), document.getElementById('content')
);
