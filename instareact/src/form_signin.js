import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Signup from './signup';
import './form_signin.css';

import App from '../App';

function Signin(){
    return(
        <div>
            <form>
                <input id='email' type='text' placeholder='Email' />
                <input id='password' type='text' placeholder='Password'/>
                
                <button type='submit' id="submit">SIGN IN</button>
                <div class="round">
                <input type="checkbox" id="checkbox" />
                <label for="checkbox"></label>
                </div>
            
                <label className='remember'>Remember me</label>
                <a href='#' className='forgotpw'>Forgot Password?</a>
                <p id='noaccount'>Don't have an account? <a href='/signup' id="signup" >SIGN UP</a></p>
                <a href="/"></a>
            </form>
        </div>    
    );
}

export default Signin;