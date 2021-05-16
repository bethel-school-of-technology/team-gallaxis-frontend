
import './App.css';
import React from 'react';
import Home from './components/Home';
import Register from './components/Register';
import BuySell from './components/BuySell';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


//function App() {
//return (
// <div className='App'>
//   <h1>Hello Nestly Neighbors!</h1>
//  </div>//
//);//
//}//

export default function App() {

  return (
    <Router>

      <Route exact path="/" component={Home} />
      <Route path="/Home" component={Home} />
      <Route path="/Register" component={Register} />
      {/* <Route path="/Main" component={Main} /> */}
      <Route path="/BuySell" component={BuySell} />
      <div>
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Register">Register</Link></li>
          <li><Link to="/BuySell">BuySell</Link></li>
        </ul>
      </div>
    </Router>

  )

}