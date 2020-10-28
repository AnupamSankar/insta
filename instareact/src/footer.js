import React from 'react';
import './footer.css';
import gplus from './assets/google-plus.png';
import facebook from './assets/facebook.png';

function Footer(){
    return (
        <React.Fragment>
            <div className='container'></div>
            <p id='connect'>Connect With</p>
            <a href='#'><img id='gplus' src={gplus}></img></a>
            <a href='#'><img id='fb' src={facebook}></img ></a>
        
        </React.Fragment>
        


    );
}

export default Footer;