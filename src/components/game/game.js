import React, { Component } from 'react';
//import logo from './../../';
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
            tile1: "You Landed on Investment Opportunity!",
            tile2: "You Landed on a politically correct, yet terrible financial event!",
            tile3: "You Landed on good financial event!",
            tile4: "You Landed on Payday!",
            tile5: "You Landed on a mehhhh financial event!",
        }


        this.roll = this.roll.bind(this);
        this.delete = this.delete.bind(this);
        this.toggleModal1 = this.toggleModal1.bind(this);
        this.toggleModal2 = this.toggleModal2.bind(this);
        this.toggleModal3 = this.toggleModal3.bind(this);
        this.toggleModal4 = this.toggleModal4.bind(this);
        this.toggleModal5 = this.toggleModal5.bind(this);
        this.totalIncome = this.totalIncome.bind(this);
        this.totalExpenses = this.totalExpenses.bind(this);
        this.whatIf = this.whatIf.bind(this);
    }

    componentDidMount() {
        this.props.getUser();
        this.props.allInfo();

    }
    whatIf() {
        console.log("what if", this.state.position)
        let { tile1, tile2, tile3, tile4, tile5 } = this.state
        console.log("what if", tile1)
        let output;
        switch (this.state.position) {
            case 1: case 6: case 11: case 16:
                output = tile1
                break;
            case 2: case 7: case 12: case 17:
                output = tile2
                break;
            case 3: case 8: case 13: case 18:
                output = tile3
                break;
            case 4: case 9: case 14: case 19:
                output = tile4
                break;
            case 5: case 10: case 15: case 20:
                output = tile5
                break;
            default:
                output = 'we suck at JS'
                break;
        }
        return output;
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
            isOpen5: !this.stateisOpen5
        })
    }

    delete() {
        axios.delete(`/delete`).then(results => {
            this.props.history.push('/')
        })
    }
    totalIncome() {

        axios.get('/incomereq').then(response => {
            console.log(response.data);
            return response.data

        })
    }
    totalExpenses() {
        axios.get('/expensesreq').then(response => {
            console.log(response.data);
            return response.data

        })
    }

    render() {
        console.log("STATE", this.state)

        let allInfo = this.props.allInfo;
        let user = this.props.user;
        let workIncome = this.props.workIncome;
        let rentalIncome = this.props.rentalIncome;
        let royaltyIncome = this.props.royaltyIncome
        let pensionIncome = this.props.pensionIncome
        let socialSecurityIncome = this.props.socialSecurityIncome
        let interestIncome = this.props.interestIncome
        let savingBalance = this.props.savingBalance
        let homeValue = this.props.homeValue
        let rentalValue = this.props.rentalValue
        let carValue = this.props.carValue
        let landValue = this.props.landValue
        let stockValue = this.props.stockValue
        let boatValue = this.props.boatValue
        let recreationValue = this.props.recreationValue
        let homeBalance = this.props.homeBalance
        let rentalBalance = this.props.rentalBalance
        let carBalance = this.props.carBalance
        let landBalance = this.props.landBalance
        let stockBalance = this.props.stockBalance
        let boatBalance = this.props.boatBalance
        let recreationalBalance = this.props.recreationalBalance
        let creditCardBalance = this.props.creditCardBalance
        let studentBalance = this.props.studentBalance
        let medicalBalance = this.props.medicalBalance
        let homePayment = this.props.homePayment
        let rentalPayment = this.props.rentalPayment
        let carPayment = this.props.carPayment
        let landPayment = this.props.landPayment
        let stockPayment = this.props.stockPayment
        let boatPayment = this.props.boatPayment
        let recreationalPayment = this.props.recreationalPayment
        let creditCardPayment = this.props.creditCardPayment
        let studentPayment = this.props.studentPayment
        let medicalPayment = this.props.medicalPayment
        let insurancePayment = this.props.insurancePayment
        let utilitiesPayment = this.props.utilitiesPayment
        let cablePayment = this.props.cablePayment
        let phonePayment = this.props.phonePayment
        let entertainmentPayment = this.props.entertainmentPayment
        let foodPayment = this.props.foodPayment
        let clothingPayment = this.props.clothingPayment
        let internetPayment = this.props.internetPayment
        console.log('user', user)
        // console.log('allInfo', allInfo)
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
                        <p>Warning! Clicking "Restart" will delete ALL saved information and kick you back to the start of the game.</p>
                        <div className="delete"><button className='click' onClick={this.delete}>Restart</button></div>

                    </div>
                    <div className="three">
                        <button onClick={this.roll} className="rollDice">Roll the Dice</button>
                        <div>
                            <div className=''>
                                <p> Player: {user.user_name ? user.user_name : null}</p>

                            </div>
                            <div>
                                <button className="click" onClick={this.toggleModal5}>
                                    Game Pop Up
                    </button>
                                <Dice whatIf={this.whatIf} roll={this.state.roll} position={this.state.position} show={this.state.isOpen5}
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