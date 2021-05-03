import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink 
} from "react-router-dom";
import Pastor from './Pastor'
import Costilla from './Costilla'



const Tacos = () => {

  const routes = [
    { 
      path: '/tacos/pastor',
      component: Pastor,
      exact: true
    },
    { 
      path: '/tacos/costilla',
      component: Costilla,
      exact: true
    }
  ]
  return (
    <Router>
      <h1>Tacos</h1>
      <ul>
        <li key="1">
          <NavLink to="/tacos/pastor/">Pastor</NavLink>
        </li>
        <li key="2">
          <NavLink to="/tacos/costilla/">Costilla</NavLink>
        </li>
      </ul>

      <Switch>
        {routes.map((x,i) => <Route {...x} key={i} />)}
      </Switch>
    
    </Router>
    
  )
}
  

export default Tacos;
