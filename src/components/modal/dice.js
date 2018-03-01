import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import game from './../game/game';
import store from './../../store';
import { getUser, allInfo, update_savingBalance, update_stockValue } from './../../ducks/Reducer';

class Dice extends React.Component {
    constructor() {
        super()
        this.state = {
            tile1: "You Landed on Investment Opportunity!",
            tile2: "You Landed on a politically correct, yet terrible financial event!",
            tile3: "You Landed on good financial event!",
            tile4: "You Landed on Payday!",
            tile5: "You Landed on a mehhhh financial event!",
            savings: 0,
            //arr1:[this.stockInvestment(),this.rentalPropertyInvestment()],
            // arr1:[this.payday()],
            // arr2:[this.payday()],
            // arr3:[this.payday()],
            // arr4:[this.payday()],
            // arr5:[this.payday()],
           
           
        }
        this.whatIf = this.whatIf.bind(this);
       // this.financialEvent = this.financialEvent.bind(this);
//         this.payday = this.payday.bind(this);
        // this.stockInvestment = this.stockInvestment.bind(this);
    }

// stockInvestment(amount){
//     const {update_savingBalance, update_stockValue, savingBalance, stockValue} = this.props;
// <div>How much would you like to Invest into Stock? <input>{amount}</input></div>
// update_savingBalance(savingBalance - amount); update_stockValue(stockValue + amount) 
// }


    // payday(){
              
    //    this.props.update_savingBalance() 
    //    return <div>Payday! {this.props.savingBalance}</div>
    // }


    whatIf() {
        let { tile1, tile2, tile3, tile4, tile5 } = this.state
        let output;
        switch (this.props.position) {
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
                break;
        }
        return output;
    }  

    // financialEvent() {
    //     let { arr1, arr2, arr3, arr4, arr5 } = this.state
    //     let output;
    //     switch (this.props.position) {
    //         case 1: case 6: case 11: case 16:
    //             output = arr1[0]
    //             break;
    //         case 2: case 7: case 12: case 17:
    //             output = arr2[0]
    //             break;
    //         case 3: case 8: case 13: case 18:
    //             output = arr3[0]
    //             break;
    //         case 4: case 9: case 14: case 19:
    //             output = arr4[0]
    //             break;
    //         case 5: case 10: case 15: case 20:
    //             output = arr5[0]
    //             break;
    //         default:
    //             break;
    //     }
    //     return output;
    // }  



    render() {
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
        let roll = this.props.roll
        let position = this.props.position;
        let savings = (this.props.savingBalance + this.props.workIncome + this.props.rentalIncome + this.props.royaltyIncome +
        this.props.pensionIncome + this.props.socialSecurityIncome + this.props.interestIncome - this.props.homePayment - this.props.rentalPayment - this.props.carPayment - this.props.landPayment - this.props.stockPayment -
        this.props.boatPayment - this.props.recreationalPayment - this.props.creditCardPayment - this.props.studentPayment - this.props.medicalPayment - this.props.insurancePayment - this.props.utilitiesPayment - 
        this.props.cablePayment - this.props.phonePayment - this.props.entertainmentPayment - this.props.foodPayment - this.props.clothingPayment - this.props.internetPayment )


        if (!this.props.show) {
            return null;
        }
        return (
            <div className="backdrop" >
                <div className="modaldice" >
                    {this.props.children}

                    <div className="footer">
                        <button className="closebtn" onClick={this.props.onClose}>
                            Close
                        </button>
                    </div>
                    <div className="modaltitle">Roll Results!</div>
                    <div>You rolled a {roll}</div>
                    <div> {this.whatIf()}</div>
                    {/* <div>{this.financialEvent()}</div> */}
                
                    <div></div>

                </div>
            </div>
        );
    }
}

Dice.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};

function mapStateToProps(state) {
    return state
    
}

export default connect(mapStateToProps, { getUser, allInfo, update_savingBalance, update_stockValue })(Dice);