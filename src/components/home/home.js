import React, { Component } from 'react';
//import logo from './../../';
//import './Home.css';
export default class Home extends Component {
    render() {
        return (
            <div className='App'>  
                {/* <img src={logo} alt=""/> */}
                <a href={ process.env.REACT_APP_LOGIN }><button>Login</button></a>
            </div> 
        )
    }
}

