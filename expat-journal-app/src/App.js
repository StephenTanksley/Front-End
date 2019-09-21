import React from 'react';
import {Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import UserSignup from './components/LoginSignin/UserSignup';
import UserLogin from './components/LoginSignin/UserLogin';

function App() {
  return (
    <>
    {/* <UserLogin/> */}



    <Route 
          path='/' 
          exact
          render={(props) => <UserSignup {...props} />} />

    <Route 
          path='/login'
          render={(props) => <UserLogin {...props} />} />

    </>
  );
}

export default App;
