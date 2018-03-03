import React from 'react';
import PropTypes from 'prop-types';
import { getUser, allInfo } from './../../ducks/Reducer';
import { connect } from 'react-redux';

class Win extends React.Component {
  render() {

    let savingBalance = this.props.savingBalance
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
    let allExpenses = (homePayment + rentalPayment + carPayment + landPayment +
      stockPayment + boatPayment + recreationalPayment + creditCardPayment + studentPayment +
      medicalPayment + insurancePayment + utilitiesPayment + cablePayment + phonePayment 
      + entertainmentPayment + foodPayment + clothingPayment + internetPayment)
   
    if(!this.props.show) {
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
            <div className="modaltitle">Win Conditions</div>
            <div>Save ${savingBalance * 50 } into Stock</div>
            <div>Eliminate all Debt ${homeBalance + rentalBalance + carBalance + landBalance + stockBalance + boatBalance +
                    recreationalBalance + creditCardBalance + studentBalance + medicalBalance}</div>
            <div>Reduce total monthly Expenses ${allExpenses} to ${allExpenses / 2}</div>
            <div>Acquire 10 rental properties</div>
          
        </div>
      </div>
    );
  }
}

Win.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { getUser, allInfo })(Win);