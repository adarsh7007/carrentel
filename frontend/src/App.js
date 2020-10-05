import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Signup from './component/signup/signup';
import Signin from './component/signin/signin';
import Home from './component/home/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home}/>
          <Route path = "/signin" component={Signin}/>
          <Route path = "/signup" component={Signup}/>
 </Switch>
      </Router>
    </div>
  );
}

export default App;
