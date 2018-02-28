import React from 'react';
import PropTypes from 'prop-types';
import { getUser, allInfo } from './../../ducks/Reducer';
import { connect } from 'react-redux';

class Equity extends React.Component {
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

    if (!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop" >
        <div className="modal" >
          {this.props.children}

          <div className="footer">
            <button className="closebtn" onClick={this.props.onClose}>
              Close
            </button>
          </div>
          <div className="modaltitle">Equity</div>
          <div>Total Property Asset Value {homeValue + rentalValue + landValue}</div>
          <div>Total Property Liabilities {homeBalance + rentalBalance + landBalance}</div>

          <div>net equity {homeValue + rentalValue - homeBalance - rentalBalance}</div>

          <div>free and clear assets</div>
          <div> things to sell</div>
          <div>cash bal</div>




        </div>
      </div>
    );
  }
}

Equity.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { getUser, allInfo })(Equity);