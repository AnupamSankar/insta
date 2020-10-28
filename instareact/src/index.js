import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, Switch, BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import Signup from './signup/signup';
import * as serviceWorker from './serviceWorker';

const routing = (
  <BrowserRouter>
  <Switch>
    <Route path='/' exact component={App}></Route>
    <Route path='/signup' component={Signup}></Route>
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
