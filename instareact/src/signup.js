import React from 'react';
import bg from '../BG.png';
import './signup.css';
import insta from '../assets/Instagram_Logo.png';
import avatar from './Avatar.png';
import add from './add_button.png';
import Dropdate from './dropdate';
import $ from 'jquery';





class Signup extends React.Component {


    

    render(){
        
        return(
            
            <div className='back'>
                
               <div className='flex-container'>
               <img className='hi' src={insta}></img>
               <div className='lin'></div>
               <p className='sign_up'>Sign up</p>
               <img className='avatar' src={avatar}></img>
               <a href='#' ><img className='add_button' src={add}></img></a>
               <form className='form'>
                   <input type='text' id='first' className='form_input' placeholder='First Name'/>
                   <input type='text' id='last' className='form_input' placeholder='Last Name'/>
                   <input type='text' id='mail' className='form_input' placeholder='Email Address'/>
                   <input type='password' id='pw' className='form_input' placeholder='Password'/>
                   <h1 id='bday'>BIRTHDAY</h1>
                   <Dropdate/>   
                   <h1 id='gender'>GENDER</h1>  
                   <input type='radio' className='radio_input' id='male' name='gender' value='male'></input>
                   <label id='label_male' for='male'>Male</label>
                   <input type='radio' className='radio_input' id='female' name='gender' value='female'></input>
                   <label id='label_female'for='male'>Female</label>
                   <button id='submit1' type='submit'>SIGN UP</button>

                  
               </form>
               <a id='back' href='/'>Back</a>
               
               
                   

               </div>
               
            </div>
        );
    }
}

export default Signup;