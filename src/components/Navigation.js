import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Component } from 'react'

class Navigation extends Component {
  state = {
    username: this.props.user.username,
    testProp: this.props.testProp
  };

  componentDidMount() {
    console.log(this.props.testProp)
    console.log(this.props.user.username)
  };

  render() {
    return (
      // <AppBar position="relative">
      //   <Toolbar>
      //     <IconButton color="inherit">
      //       <MenuIcon />
      //     </IconButton>
      //     <Typography variant="h6" style={{ flexGrow: "1" }}>
      //       Login App
      //     </Typography>      
      //   </Toolbar>
      //   <div align="left">
      //       <Link to="/">Home</Link>  
      //       <Link to="/"  onClick={() => {
      //           document.cookie = "loggedIn=false";
      //           window.location.replace("/");
      //         }}>Logout</Link>
      //   </div>   
      // </AppBar>

      <AppBar position="staic">
        <Toolbar>
          <h1>Castellammare Del Golfo Walking Tours</h1>
        </Toolbar>
        <div align="left">
          <a href="/">
            <Button>Home</Button>
          </a>
          <a href="/" onClick={() => {
            document.cookie = "loggedIn=false";
            window.location.replace("/");
          }}>
          </a>
          <a href="/About" onClick={() => {
            window.location.replace("/About");
          }}>
            <Button>
              About
            </Button>
          </a>
          <a href="/Links" onClick={() => {
            window.location.replace("/Links");
          }}>
            <Button>
              HelpFullLinks
            </Button>
          </a>
          <a href="/TourInfo" onClick={() => {
            window.location.replace("/TourInfo");
          }}>
            <Button>
              TourInfo
            </Button>
          </a>
          <a href="https://github.com/tonezone108/Login-App">
            <Button>GITHUB</Button>
          </a>
          {this.props.user.username}
        </div>
      </AppBar>
    );
  };
}

export default Navigation;
