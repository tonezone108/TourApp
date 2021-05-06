import React from "react";
import { Switch, Route, Redirect } from "react-router";
import cookie from "cookie";
import Home from "./containers/Home";
import Login from "./containers/Login";
import About from "./components/About";
import Links from "./components/Links";
import TourInfo from "./components/TourInfo";
import CheckOut from "./components/CheckOut"
import TourMenuENG from "./components/TourMenuENG"
import TourMenuITA from "./components/TourMenuITA"

// Write checkAuth function here


const checkAuth = () => {
const cookies = cookie.parse(document.cookie);
var isTrueSet = (cookies["loggedIn"] === 'true');
return isTrueSet
}



// Check the cookies for a cookie called "loggedIn"

// Write ProtectedRoute function here
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const Router = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/About" component={About} />
      <ProtectedRoute exact path="/Links" component={Links} />
      <ProtectedRoute exact path="/TourInfo" component={TourInfo} />
      <ProtectedRoute exact path="/CheckOut" component={CheckOut} />
      <ProtectedRoute exact path="/TourMenuENG" component={TourMenuENG} />
      <ProtectedRoute exact path="/TourMenuITA" component={TourMenuITA} />
    </Switch>
  );
};

export default Router;
