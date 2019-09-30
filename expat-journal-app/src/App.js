import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import UserSignup from "./components/LoginSignin/UserSignup";
import UserLogin from "./components/LoginSignin/UserLogin";
import Nav from "../src/components/Navigation/Nav";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Nav />
      


        <Route 
          path="/sign-up" 
          render={props => <UserSignup {...props} />} />

        <Route 
          path="/login" 
          render={props => <UserLogin {...props} />} />

        <Route 
          path="/" 
          exact render={props => <Dashboard {...props} />} />

    </>
  );
}

export default App;