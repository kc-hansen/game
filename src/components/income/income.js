import React, { Component } from 'react';
import './../../../src/main.css';
import axios from 'axios';
import Header from './../header/header';


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

    render() {
        return (
            <div className='AppFirst'>  
            <Header/>
                <div className="leftPos"><p className="leftinfo">This game requires a lot of financial information to get started.
                 You can enter your actual information or made up information. You will learn the most from entering your actual financial 
                 information. Once entered you are able to resume progress at any time. To resume a prior game, click on<div className="resGame"> "Resume Game"</div> at the top of the page.</p></div>
                <div className="introTitle">Please enter your income here!</div>
                <div className="inputFirst">
                <div>Work Income   <input onChange={(e) => { this.setState({workIncome:e.target.value})}}/></div>
                <div>Rental Income   <input onChange={(e) => { this.setState({rentalIncome:e.target.value})}}/></div>
                <div>Royalty Income   <input onChange={(e) => { this.setState({royaltyIncome:e.target.value})}}/></div>
                <div>Pension Income   <input onChange={(e) => { this.setState({pensionIncome:e.target.value})}}/></div>
                <div>Social Security Income   <input onChange={(e) => { this.setState({socialSecurityIncome:e.target.value})}}/></div>
                <div>Interest Income   <input onChange={(e) => { this.setState({interestIncome:e.target.value})}}/></div>
                <button className="nextIncome" onClick={this.incomeNext}>Next</button>
                </div>
            </div> 
        )
    }
}
  
  export default Income