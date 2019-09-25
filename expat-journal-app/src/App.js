import React, { useState } from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import {Container} from './components/Styles/Styles'
import UserSignup from './components/LoginSignin/UserSignup';
import UserLogin from './components/LoginSignin/UserLogin';
import Nav from '../src/components/Navigation/Nav'
import Dashboard from './components/Dashboard/Dashboard';



function App() {

  return (
    <>

    <Nav />

    <Route 
          path='/'
          exact
          render={(props) => <Dashboard {...props} />} />

    <Route 
          path='/sign-up'
          exact
          render={(props) => <UserSignup {...props} />} />

    <Route 
          path='/login'
          exact
          render={(props) => <UserLogin {...props} />} />

        </>

  );
}

export default App;
