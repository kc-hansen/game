import React, { Component } from 'react';
//import logo from './../../';
import './../../../src/main.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';


class Income extends Component {
    constructor(){
        super()
        
        this.incomeNext= this.incomeNext.bind(this)
        this.state = {
            workIncome : 0,
            rentalIncome : 0,
            royaltyIncome : 0,
            pensionIncome : 0,
            socialSecurityIncome : 0,
            interestIncome : 0
        }

    }
incomeNext(){

    const { workIncome,
    rentalIncome,
    royaltyIncome,
    pensionIncome,
    socialSecurityIncome,
    interestIncome }= this.state

    axios.post('/insert_income', {workIncome, rentalIncome, royaltyIncome,pensionIncome,socialSecurityIncome,interestIncome }).then(response => {
        this.props.history.push('/assets')
    })
}

//function for each of these inputs


    render() {
        return (
            <div className='App'>  
                Income Component

                <div>Work Income<input onChange={(e) => { this.setState({workIncome:e.target.value})}}/></div>
                <div>Rental Income<input onChange={(e) => { this.setState({rentalIncome:e.target.value})}}/></div>
                <div>Royalty Income<input onChange={(e) => { this.setState({royaltyIncome:e.target.value})}}/></div>
                <div>Pension Income<input onChange={(e) => { this.setState({pensionIncome:e.target.value})}}/></div>
                <div>Social Security Income<input onChange={(e) => { this.setState({socialSecurityIncome:e.target.value})}}/></div>
                <div>Interest Income<input onChange={(e) => { this.setState({interestIncome:e.target.value})}}/></div>
                <button onClick={this.incomeNext}>Next</button>
            </div> 
        )
    }
}

function mapStateToProps( state ) {
    return { 
        workIncome: state.workIncome,
        rentalIncome: state.rentalIncome,
        royaltyIncome: state.royaltyIncome,
        pensionIncome: state.pensionIncome,
        socialSecurityIncome: state.socialSecurityIncome,
        interestIncome: state.interestIncome,
        
    };
  }
  
  export default connect( mapStateToProps )( Income );