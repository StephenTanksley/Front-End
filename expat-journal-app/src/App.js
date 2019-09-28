import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import UserSignup from "./components/LoginSignin/UserSignup";
import UserLogin from "./components/LoginSignin/UserLogin";
import Nav from "../src/components/Navigation/Nav";
import Dashboard from "./components/Dashboard/Dashboard";
import { Container } from "./components/Styles/Styles";

function App() {
  return (
    <>
      <Nav />
      <Container>
        <h1>Expat Journal</h1>
      </Container>


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