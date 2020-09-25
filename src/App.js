import React, { createContext, useState } from 'react';


import { Button, Card, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotMatch from './Components/NotMatch/NotMatch';
import Stays from './Components/Stays/Stays';
import Navber from './Components/Navber/Navber';
import Login from './Components/Login/Login';
import CoxBazar from './Components/CoxBazar/CoxBazar';
import CreatAccount from './Components/CreatAccount/CreatAccount';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Sajek from './Components/Sajek/Sajek';
import Sundarban from './Components/Sundarban/Sundarban';
import Coxsbazar from './Components/Coxsbazar/Coxsbazar';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser]=useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <p>Name:{loggedInUser.email}</p>
    <Router>
      <Navber/>
      <Switch>

        <Route exact path="/home">
          <Home/>
        </Route>

        <Route path="/coxbazar">
          <CoxBazar></CoxBazar>
        </Route>

        <Route path="/coxsbazar">
          <Coxsbazar></Coxsbazar>
        </Route>

        <Route path="/sajek">
          <Sajek></Sajek>
        </Route>

        <Route path="/sundarban">
          <Sundarban></Sundarban>
        </Route>



        <PrivateRoute path="/stays">
          <Stays></Stays>
        </PrivateRoute>


        <Route path="/create">
          <CreatAccount/>
        </Route>

        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/">
        <Home/>
        </Route>
        <Route path="/*">
          <NotMatch/>
        </Route>


      </Switch>
    </Router>

    </UserContext.Provider>
    
  );
}

export default App;
