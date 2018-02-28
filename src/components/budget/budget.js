import React, { Component } from 'react';
//import logo from './../../';
//import './Home.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './../header/header';

class Budget extends Component {
    constructor() {
        super()
        this.state = {
            homePayment: 0,
            rentalPayment: 0,
            carPayment: 0,
            landPayment: 0,
            stockPayment: 0,
            boatPayment: 0,
            recreationalPayment: 0,
            creditCardPayment: 0,
            studentPayment: 0,
            medicalPayment: 0,
            insurancePayment: 0,
            utilitiesPayment: 0,
            cablePayment: 0,
            phonePayment: 0,
            entertainmentPayment: 0,
            foodPayment: 0,
            clothingPayment: 0,
            internetPayment: 0,
        }
            this.budgetNext = this.budgetNext.bind(this);
    }
    budgetNext() {
        const { homePayment,
            rentalPayment,
            carPayment,
            landPayment,
            stockPayment,
            boatPayment,
            recreationalPayment,
            creditCardPayment,
            studentPayment,
            medicalPayment,
            insurancePayment,
            utilitiesPayment,
            cablePayment,
            phonePayment,
            entertainmentPayment,
            foodPayment,
            clothingPayment,
            internetPayment } = this.state

        axios.post('/insert_budget', {
            homePayment,
            rentalPayment,
            carPayment,
            landPayment,
            stockPayment,
            boatPayment,
            recreationalPayment,
            creditCardPayment,
            studentPayment,
            medicalPayment,
            insurancePayment,
            utilitiesPayment,
            cablePayment,
            phonePayment,
            entertainmentPayment,
            foodPayment,
            clothingPayment,
            internetPayment
        }).then(response => {
            this.props.history.push('/game')
        })
    }

    render() {
        return (
            <div className='App'>
                <Header />
                Budget Component
                <div className="input">
                    <div>Home Loan Payment <input onChange={(e) => { this.setState({ homePayment: e.target.value }) }}></input></div>
                    <div>Rental Loan Payment <input onChange={(e) => { this.setState({ rentalPayment: e.target.value }) }}></input></div>
                    <div>Car Loan Payment <input onChange={(e) => { this.setState({ carPayment: e.target.value }) }}></input></div>
                    <div>Land Loan Payment <input onChange={(e) => { this.setState({ landPayment: e.target.value }) }}></input></div>
                    <div>Stocks Loan Payment <input onChange={(e) => { this.setState({ stockPayment: e.target.value }) }}></input></div>
                    <div>Boat Loan Payment <input onChange={(e) => { this.setState({ boatPayment: e.target.value }) }}></input></div>
                    <div>Recreational Vehicle Payment <input onChange={(e) => { this.setState({ recreationalPayment: e.target.value }) }}></input></div>
                    <div>Credit Card Payment <input onChange={(e) => { this.setState({ creditCardPayment: e.target.value }) }}></input></div>
                    <div>Student Debt Payment <input onChange={(e) => { this.setState({ studentPayment: e.target.value }) }}></input></div>
                    <div>Medical Expense Payment <input onChange={(e) => { this.setState({ medicalPayment: e.target.value }) }}></input></div>
                    <div>Home and Auto Insurance <input onChange={(e) => { this.setState({ insurancePayment: e.target.value }) }}></input></div>
                    <div>Utilities <input onChange={(e) => { this.setState({ utilitiesPayment: e.target.value }) }}></input></div>
                    <div>Cable <input onChange={(e) => { this.setState({ cablePayment: e.target.value }) }}></input></div>
                    <div>Phone <input onChange={(e) => { this.setState({ phonePayment: e.target.value }) }}></input></div>
                    <div>Entertainment <input onChange={(e) => { this.setState({ entertainmentPayment: e.target.value }) }}></input></div>
                    <div>Food <input onChange={(e) => { this.setState({ foodPayment: e.target.value }) }}></input></div>
                    <div>Clothing <input onChange={(e) => { this.setState({ clothingPayment: e.target.value }) }}></input></div>
                    <div>Internet <input onChange={(e) => { this.setState({ internetPayment: e.target.value }) }}></input></div>
                    <button className="next" onClick={this.budgetNext}>Next</button>
                </div>
            </div >
        )
    }
}

function mapStateToProps(state) {
    return {
        homePayment: state.homePayment,
        rentalPayment: state.rentalPayment,
        carPayment: state.carPayment,
        landPayment: state.landPayment,
        stockPayment: state.stockPayment,
        boatPayment: state.boatPayment,
        recreationalPayment: state.recreationalPayment,
        creditCardPayment: state.creditCardPayment,
        studentPayment: state.studentPayment,
        medicalPayment: state.medicalPayment,
        insurancePayment: state.insurancePayment,
        utilitiesPayment: state.utilitiesPayment,
        cablePayment: state.cablePayment,
        phonePayment: state.phonePayment,
        entertainmentPayment: state.entertainmentPayment,
        foodPayment: state.foodPayment,
        clothingPayment: state.clothingPayment,
        internetPayment: state.internetPayment,

    };
}

export default connect(mapStateToProps)(Budget);