import React, { Component } from 'react';
//import logo from './../../';
import './../../_game.scss';
//import reducer from './../../ducks/Reducer';
import rocket from './../../rocket.png';
import axios from 'axios';
import Equity from './../modal/equity';
import CashFlow from './../modal/cash_flow';
import Expenses from './../modal/expenses';
import Win from './../modal/win';



class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roll: 1,
            isOpen: false
        }


        this.roll = this.roll.bind(this);
        this.delete = this.delete.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }




    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    roll() {
        let roll = Math.floor(Math.random() * 6) + 1;
        this.setState({ roll: roll })
    }

    delete() {
        axios.delete(`/delete`).then(results => {
            this.props.history.push('/')
        })
    }


    render() {

        let squares = Array(20).fill('').map((v, i) => {
            return (
                <div className={`box ${'box' + (i + 1)}`} key={i}>
                    {i + 1 === this.props.position ?
                        <img src={rocket} alt="" className="rocket" />
                        : null
                    }
                </div>
            )
        })

        return (
            <div className="game">
                <div className="header">
                    Game Component

            </div>
                <div className="wrapper">
                    <div className="one">

                        <button className="click" onClick={this.toggleModal}>
                            CashFlow
                    </button>

                        <CashFlow show={this.state.isOpen}
                            onClose={this.toggleModal}>
                            Here's some content for the modal
                        </CashFlow>
                        <button className="click" onClick={this.toggleModal}>
                            Equity
                    </button>
                        <Equity show={this.state.isOpen}
                            onClose={this.toggleModal}>
                            Here's some content for the modal
                        </Equity>

                        <button className="click" onClick={this.toggleModal}>
                            Expenses
                    </button>

                        <Expenses show={this.state.isOpen}
                            onClose={this.toggleModal}>
                            Here's some content for the modal
                        </Expenses>

                        <button className="click" onClick={this.toggleModal}>
                            Win Condition
                    </button>

                        <Win show={this.state.isOpen}
                            onClose={this.toggleModal}>
                            Here's some content for the modal
                        </Win>


                    </div>



                    <div className="two">
                        <div className="board">
                            {squares}
                            <div className="box box21"></div>
                        </div>
                        <p>Warning! Clicking "Restart" will delete all saved information and kick you back to the start of the game.</p>
                        <div className="delete"><button  onClick={this.delete}>Restart</button></div>

                    </div>
                    <div className="three">
                        <button onClick={this.roll} className="rollDice">Roll the Dice</button>
                        {this.state.roll}
                    </div>
                </div>
            </div>
        )
    }
}

export default Game;
