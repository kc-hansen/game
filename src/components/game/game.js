import React, { Component } from 'react';
import './../../_game.scss';
import { getUser, allInfo } from './../../ducks/Reducer';
import { connect } from 'react-redux';
import rocket from './../../tiefighter.png';
import axios from 'axios';
import Equity from './../modal/equity';
import CashFlow from './../modal/cash_flow';
import Expenses from './../modal/expenses';
import Win from './../modal/win';
import Header from './../header/header';
import store from './../../store';
import Dice from './../modal/dice';



class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 1,
            roll: 1,
            isOpen1: false,
            isOpen2: false,
            isOpen3: false,
            isOpen4: false,
            isOpen5: false,
            clicked: false,
        }

        this.roll = this.roll.bind(this);
        this.delete = this.delete.bind(this);
        this.toggleModal1 = this.toggleModal1.bind(this);
        this.toggleModal2 = this.toggleModal2.bind(this);
        this.toggleModal3 = this.toggleModal3.bind(this);
        this.toggleModal4 = this.toggleModal4.bind(this);
        this.toggleModal5 = this.toggleModal5.bind(this);
        this.updateClicked = this.updateClicked.bind(this);
    }

    componentDidMount() {
        this.props.getUser();
        this.props.allInfo();

    }

    toggleModal1 = () => {
        this.setState({
            isOpen1: !this.state.isOpen1
        });
    }
    toggleModal2 = () => {
        this.setState({
            isOpen2: !this.state.isOpen2
        });
    }
    toggleModal3 = () => {
        this.setState({
            isOpen3: !this.state.isOpen3
        });
    }
    toggleModal4 = () => {
        this.setState({
            isOpen4: !this.state.isOpen4
        });
    }
    toggleModal5 = () => {
        this.setState({
            isOpen5: !this.state.isOpen5
        });
    }
    roll() {
        let roll = Math.floor(Math.random() * 6) + 1;
        this.setState({
            roll: roll,
            position: this.state.position + roll > 20 ? this.state.position + roll - 20 : this.state.position + roll,
            isOpen5: !this.stateisOpen5,
            clicked: !this.state.clicked
        })
        
    }

    delete() {
        axios.delete(`/delete`).then(results => {
            this.props.history.push('/')
        })
    }

updateClicked(){
    this.setState({
        clicked:false
    })
}
    render() {

        let user = this.props.user;
        let squares = Array(20).fill('').map((v, i) => {
            return (
                <div className={`box ${'box' + (i + 1)}`} key={i}>
                    {this.state.position === (i + 1) ?
                        <img src={rocket} alt="" className="rocket" />
                        : null
                    }
                </div>
            )
        })

        return (
            <div className="game">
                <Header />
                <div className="wrapper">
                    <div className="one">

                        <button className="click" onClick={this.toggleModal1}>
                            CashFlow
                    </button>

                        <CashFlow show={this.state.isOpen1}
                            onClose={this.toggleModal1}>
                        </CashFlow>
                        <button className="click" onClick={this.toggleModal2}>
                            Equity
                    </button>
                        <Equity show={this.state.isOpen2}
                            onClose={this.toggleModal2}>
                        </Equity>

                        <button className="click" onClick={this.toggleModal3}>
                            Expenses
                    </button>

                        <Expenses show={this.state.isOpen3}
                            onClose={this.toggleModal3}>
                        </Expenses>

                        <button className="click" onClick={this.toggleModal4}>
                            Win Condition
                    </button>

                        <Win show={this.state.isOpen4}
                            onClose={this.toggleModal4}>
                        </Win>
                    </div>

                    <div className="two">
                        <div className="board">
                            {squares}
                            <div className="box box21"></div>
                        </div>
                        <div className="warningBox">
                        <p className="warning">Warning! Clicking "Restart" will delete ALL saved information and kick you back to the start of the game.</p>
                        <div className="delete"><button className='click' onClick={this.delete}>Restart</button></div>
                        </div>
                    </div>
                    <div className="three">
                        <button onClick={this.roll} className="rollDice">Roll the Dice</button>
                        <div>
                            <div className="name">
                                <p> Player: {user.user_name ? user.user_name : null}</p>

                            </div>
                            <div>
                                <button className="click" onClick={this.toggleModal5}>
                                    Game Event
                                 </button>
                                <Dice updateClicked={this.updateClicked} clicked={this.state.clicked} roll={this.state.roll} position={this.state.position} show={this.state.isOpen5}
                                    onClose={this.toggleModal5}>
                                </Dice>
                            </div>
                            <div>
                                {/* <a href='http://localhost:3005/logout'><button className='click'>Logout</button></a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, { getUser, allInfo })(Game);