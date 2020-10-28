import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Home from './user/home';
import './App.css';
import Login from './user/login';
import Logo from './user/logo';
import Signin from './user/form_signin';
//import Footer from './footer';
import bg from './user/BG.png';
//import Signup from './signup/signup';
import {API} from "./backend";
function App() {
  return(
    <Router>
    <Home/>
    
    </Router>
  );}

export default App;
