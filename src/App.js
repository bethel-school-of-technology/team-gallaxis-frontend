
import './App.css';

import React from 'react';
import Home from './components/homepage';
import Register from './components/RegisterPage';
//import Main from './components/Main';//
import LostAndFound from './components/lostandfoundpage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


export default function App() {

  <Router>

    <Route exact path="/" component={Home} />
    <Route path="/Register" component={Register} />
    {/* <Route path="/Main" component={Main} /> */}
    <Route path="/LostAndFound" component={LostAndFound} />


  </Router>

}