import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Order from './components/Order/Order/Order';
import AddService from './components/AddService/AddService';
import AddTestimonial from './components/AddTestimonial/AddTestimonial';
import AddAdmin from './components/AddAdmin/AddAdmin';
import AddReview from './components/AddReview/AddReview';
import NotFound from './components/NotFound/NotFound';
import Bookings from './components/Dashboard/Bookings/Bookings';
import Orders from './components/Orders/Orders';

export const UserContext = createContext();

function App() {
  
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/order">
            <Order></Order>
          </Route>
          <Route path="/bookings">
            <Bookings></Bookings>
          </Route>
          <Route path="/orders">
            <Orders></Orders>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/addTestimonial">
            <AddTestimonial></AddTestimonial>
          </Route>
          <Route path="/addReview">
            <AddReview></AddReview>
          </Route>
          <Route path="/addAdmin">
            <AddAdmin></AddAdmin>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
