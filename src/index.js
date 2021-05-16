import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Register from './components/Register';
import BuySell from './components/BuySell';
import Home from './components/Home';



<Router>
  <div>
    <ul>
      <li><Link to="/Home">Home</Link></li>
      <li><Link to="/Register">Register</Link></li>
      <li><Link to="/BuySell">BuySell</Link></li>
    </ul>

    <hr />

    <Route exact path="/Home" component={Home} />
    <Route path="/Register" component={Register} />
    <Route path="/BuySell" component={BuySell} />
  </div>
</Router>





ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();




ReactDOM.render(<App />, document.getElementById('root'));
