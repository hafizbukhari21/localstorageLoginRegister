import './App.css';
import React, {useState} from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import Login from './Page/Login'
import Home from './Page/Home'
import Register from './Page/Register'


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/Login">
            <Login/>
          </Route>
          <Route path="/">
            <Register/>
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
