import React, { Component } from 'react';
//import logo from './../../';
//import './Home.css';
export default class Home extends Component {
    render() {
        return (
            <div className='Apps'>
                <div className='loginbox'>
                    <a href={process.env.REACT_APP_LOGIN}><button className='title'>START</button></a>
                    {/* <a href={process.env.REACT_APP_CONTINUE}><button className='title'>CONTINUE</button></a> */}
                </div>
            </div>
        )
    }
}

