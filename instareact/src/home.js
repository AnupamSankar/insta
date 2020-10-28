import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 

//import './App.css';
import Login from './login';
import Logo from './logo';
import Signin from './form_signin';
import Footer from './footer';
import bg from './BG.png';
import './home.css';

function Home(){
    return(
        <Router>
        <div className="background">
         
          
          <Login/>
          <Logo/>
          <div className='line'></div>
          <p className='member'>Already a member?</p>
          <p className='signin'>Sign in to your account</p>
          <Footer/>
          <Signin/>
          <Switch>
            
          </Switch>
          
          
          
         
    
                
        </div>
        </Router>
      );

}

export default Home;