import React from 'react';
import PropTypes from 'prop-types';
import { getUser, allInfo } from './../../ducks/Reducer';
import { connect } from 'react-redux';

class Expenses extends React.Component {
  render() {

    let allInfo = this.props.allInfo;
    let user = this.props.user;
  
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

    if(!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop" >
        <div className="modalexpenses" >
          {this.props.children}

          <div className="footer">
            <button className="closebtn" onClick={this.props.onClose}>
              Close

            </button>
          </div>
          <div className="modaltitle">Monthly Expenses</div>
        <div>Home Payment  ${homePayment}</div>
        <div>Rental Property Payment  ${rentalPayment}</div>
        <div>Car Loan Payment  ${carPayment}</div>
        <div>Land Loan Payment  ${landPayment}</div>
        <div>Stock Loan Payment  ${stockPayment}</div>
        <div>Boat Loan Payment  ${boatPayment}</div>
        <div>Recreational Loan Payment  ${recreationalPayment}</div>
        <div>Credit Card Payment  ${creditCardPayment}</div>
        <div>Student Loan Payment  ${studentPayment}</div>
        <div>Medical Bills Payment  ${medicalPayment}</div>
        <div>Home and Auto Insurance Payment  ${insurancePayment}</div>
        <div>Utility Bill Payment  ${utilitiesPayment}</div>
        <div>Cable Bill Payment  ${cablePayment}</div>
        <div>Phone Bill Payment  ${phonePayment}</div>
        <div>Entertainment Expenses ${entertainmentPayment}</div>
        <div>Foood Expenses ${foodPayment}</div>
        <div>Clothing Expenses ${clothingPayment}</div>
        <div>Internet Bill Payment  ${internetPayment}</div>
        
        </div>
      </div>
    );
  }
}

Expenses.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, { getUser, allInfo })(Expenses);