import React from "react";
import { Switch, Route, Redirect } from "react-router";
import cookie from "cookie";
import Home from "./containers/Home";
import Login from "./containers/Login";
import About from "./containers/About";
import Links from "./components/Links";
import TourInfo from "./components/TourInfo";
import CheckOut from "./containers/CheckOut"
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
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Links" component={Links} />
      <Route exact path="/TourInfo" component={TourInfo} />
      <ProtectedRoute exact path="/CheckOut" component={CheckOut} />
      <Route exact path="/TourMenuENG" component={TourMenuENG} />
      <Route exact path="/TourMenuITA" component={TourMenuITA} />
    </Switch>
  );
};

export default Router;
