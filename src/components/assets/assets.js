import React, { Component } from 'react';
import axios from 'axios';
import Header from './../header/header';



class Assets extends Component {
    constructor() {
        super()

        this.assetsNext = this.assetsNext.bind(this);
        this.state = {
            savingBalance: 0,
            homeValue: 0,
            rentalValue: 0,
            carValue: 0,
            landValue: 0,
            stockValue: 0,
            boatValue: 0,
            recreationValue: 0,
        }
    }

    assetsNext() {

        const { savingBalance,
            homeValue,
            rentalValue,
            carValue,
            landValue,
            stockValue,
            boatValue,
            recreationValue } = this.state

        axios.post('/insert_assets', { savingBalance, homeValue, rentalValue, carValue, landValue, stockValue, boatValue, recreationValue }).then(response => {
            this.props.history.push('/liabilities')
        })
    }

    render() {
        return (
            <div className='App'>
                <Header />
                
                <div className="introTitle">Please enter your Assets Value's</div>
                <div className="input">
                    <div>Savings Account Balance <input onChange={(e) => { this.setState({ savingBalance: e.target.value }) }}></input></div>
                    <div>Home Value <input onChange={(e) => { this.setState({ homeValue: e.target.value }) }}></input></div>
                    <div>Rental Value <input onChange={(e) => { this.setState({ rentalValue: e.target.value }) }}></input></div>
                    <div>Car Value <input onChange={(e) => { this.setState({ carValue: e.target.value }) }}></input></div>
                    <div>Land Value <input onChange={(e) => { this.setState({ landValue: e.target.value }) }}></input></div>
                    <div>Stocks Value <input onChange={(e) => { this.setState({ stockValue: e.target.value }) }}></input></div>
                    <div>Boat Value <input onChange={(e) => { this.setState({ boatValue: e.target.value }) }}></input></div>
                    <div>Recreation Vehicle Value <input onChange={(e) => { this.setState({ recreationValue: e.target.value }) }}></input></div>
                    <button  className="next" onClick={this.assetsNext}>Next</button>
                </div>
            </div>
        )
    }
}

export default Assets