import React from 'react';
import 'react-input-range/lib/css/index.css';
import './App.css';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Records from './Components/Records';
import {BrowserRouter as  Router,Route,Switch } from 'react-router-dom';

function App() {
  return (
    <div>    
      <Router>
        <Menu /> 
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Home"  component={Home}/> 
            <Route exact path="/Records"  component={Records}/>                   
          </Switch>
      </Router>   
    </div>
  );
}

export default App;




   





