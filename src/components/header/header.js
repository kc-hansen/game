import React, { Component } from 'react';
import './../../_index.scss';
import axios from 'axios';
import reducer from './../../ducks/Reducer';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.save = this.save.bind(this);
    }

    save() {

        const { workIncome,
            rentalIncome,
            royaltyIncome,
            pensionIncome,
            socialSecurityIncome,
            interestIncome,
            savingBalance,
            homeValue,
            rentalValue,
            carValue,
            landValue,
            stockValue,
            boatValue,
            recreationValue,
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
            ntertainmentPayment,
            foodPayment,
            clothingPayment,
            internetPayment,
     } = this.state
        axios.post('/save_game', { workIncome, rentalIncome, royaltyIncome, pensionIncome, socialSecurityIncome, 
            interestIncome,       savingBalance,
            homeValue,
          rentalValue,
             carValue,
            landValue,
           stockValue,
            boatValue,
      recreationValue,
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
  ntertainmentPayment,
          foodPayment,
      clothingPayment,
      internetPayment }).then(response => {
            this.props.history.push('/')
        })
    }
    render() {
        return (
            <div className="header">
                <a href={process.env.REACT_APP_RESUME}><button className='resume'>Resume Game</button></a>
                <div className="topName">Understand Money Game</div>
                <button className='resume'>Save Game</button>
            </div>
        )
    }
}

export default Header;

