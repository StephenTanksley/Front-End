import React from 'react';
import {Route} from 'react-router-dom'
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
