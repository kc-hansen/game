import React, { Component } from 'react';
//import logo from './../../';
//import './Home.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Liabilities extends Component {
    constructor() {
        super()
        this.state = {
            homeBalance: 0,
            rentalBalance: 0,
            carBalance: 0,
            landBalance: 0,
            stockBalance: 0,
            boatBalance: 0,
            recreationalBalance: 0,
            creditCardBalance: 0,
            studentBalance: 0,
            medicalBalance: 0,
        }
        this.liabilitiesNext = this.liabilitiesNext.bind(this);
    }
    liabilitiesNext() {
        const {
            homeBalance,
            rentalBalance,
            carBalance,
            landBalance,
            stockBalance,
            boatBalance,
            recreationalBalance,
            creditCardBalance,
            studentBalance,
            medicalBalance,
        } = this.state
        
        axios.post('/insert_liabilities', {homeBalance,
            rentalBalance,
            carBalance,
            landBalance,
            stockBalance,
            boatBalance,
            recreationalBalance,
            creditCardBalance,
            studentBalance,
            medicalBalance}).then(response => {
                this.props.history.push('/budget')
            })
    }

    render() {
        return (
            <div className='App'>
                Liabilities Component
                <div>Home Loan Balance <input onChange={(e) => {this.setState({homeBalance:e.target.value})}}></input></div>
                <div>Rental Loan Balance <input onChange={(e) => {this.setState({rentalBalance:e.target.value})}}></input></div>
                <div>Car Loan Balance <input onChange={(e) => {this.setState({carBalance:e.target.value})}}></input></div>
                <div>Land Loan Balance <input onChange={(e) => {this.setState({landBalance:e.target.value})}}></input></div>
                <div>Stocks Loan Balance <input onChange={(e) => {this.setState({stockBalance:e.target.value})}}></input></div>
                <div>Boat Loan Balance <input onChange={(e) => {this.setState({boatBalance:e.target.value})}}></input></div>
                <div>Recreational Vehicle Balance <input onChange={(e) => {this.setState({recreationalBalance:e.target.value})}}></input></div>
                <div>Credit Card Balance <input onChange={(e) => {this.setState({creditCardBalance:e.target.value})}}></input></div>
                <div>Student Debt Balance <input onChange={(e) => {this.setState({studentBalance:e.target.value})}}></input></div>
                <div>Medical Expense Balance <input onChange={(e) => {this.setState({medicalBalance:e.target.value})}}></input></div>
                <button onClick={this.liabilitiesNext}>Next</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        homeBalance: state.homeBalance,
        rentalBalance: state.rentalBalance,
        carBalance: state.carBalance,
        landBalance: state.landBalance,
        stockBalance: state.stockBalance,
        boatBalance: state.boatBalance,
        recreationalBalance: state.recreationalBalance,
        creditCardBalance: state.creditCardBalance,
        studentBalance: state.studentBalance,
        medicalBalance: state.medicalBalance,

    };
}

export default connect(mapStateToProps)(Liabilities);