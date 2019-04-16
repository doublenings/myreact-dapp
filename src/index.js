/*https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-stylesheet*/
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Comment from './js/comment'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar,Nav } from 'react-bootstrap';
import Profile from './js/profile'

const routing = (
    <Router>
      <div>
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Conference</Navbar.Brand>
    <Nav classNameName="mr-auto">
      <Nav.Link href="/profile">Home</Nav.Link>
      <Nav.Link href="/upload">Upload</Nav.Link>
      <Nav.Link href="/comment" component ={Comment}>Comment</Nav.Link>
    </Nav>
  </Navbar>
        <Route exact path="/" component={Profile} />   
        <Route exact path="/profile" component={Profile} />
        <Route path="/upload" component={App} />
        <Route path="/comment" component={Comment} />
        
      </div>
    </Router>
  )


ReactDOM.render( routing , document.getElementById('root'));
serviceWorker.unregister();
