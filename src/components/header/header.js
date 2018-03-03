import React, { Component } from 'react';
import './../../_index.scss';

class Header extends Component {

    render() {
        return (
            <div className="header">
                <a href={process.env.REACT_APP_RESUME}><button className='resume'>Resume Game</button></a>
                <div className="topName">Understand Money Game</div>
                <a href={process.env.REACT_APP_SAVE}><button className='resume'>Save Game</button></a>
            </div>
        )
    }
}

export default Header;