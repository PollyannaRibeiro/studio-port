import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import './App.css';
import Home from './pages/Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <Router className="App">
      <Home />
    </Router>
  );
}

export default App;
