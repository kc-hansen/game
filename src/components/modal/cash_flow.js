import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CashFlow extends React.Component {
  constructor() {
    super()
    this.state = {
      debtToIncome : 0,
      debtIncome: 0,
      homeToIncome:0,
      homeIncome:0,

    }
  }
  render() {


    let workIncome = this.props.workIncome;
    let rentalIncome = this.props.rentalIncome;
    let royaltyIncome = this.props.royaltyIncome
    let pensionIncome = this.props.pensionIncome
    let socialSecurityIncome = this.props.socialSecurityIncome
    let interestIncome = this.props.interestIncome
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
    let debtToIncome = this.state.debtToIncome
    let debtIncome = this.state.debtIncome
    let homeToIncome = this.state.homeToIncome
    let homeIncome = this.state.homeIncome

    //debt to income calc
    { debtToIncome = (homePayment + rentalPayment + carPayment + landPayment + stockPayment +
      boatPayment + recreationalPayment + creditCardPayment + studentPayment + medicalPayment)/(workIncome + rentalIncome + royaltyIncome +
    pensionIncome + socialSecurityIncome + interestIncome) *100 } 
        //home to income calc
    {homeToIncome = homePayment / (workIncome + royaltyIncome +
      pensionIncome + socialSecurityIncome + interestIncome) *100}

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
          <div className="modaltitle">  Cash Flow Information </div>
          <div> Total Monthly Income ${workIncome + rentalIncome + royaltyIncome +
            pensionIncome + socialSecurityIncome + interestIncome}
          </div>
          <div>Total Monthly Payments ${homePayment + rentalPayment + carPayment + landPayment + stockPayment +
            boatPayment + recreationalPayment + creditCardPayment + studentPayment + medicalPayment + insurancePayment + utilitiesPayment + cablePayment + phonePayment + entertainmentPayment + foodPayment + clothingPayment + internetPayment}</div>
          <div>Cash Flow ${workIncome + rentalIncome + royaltyIncome +
            pensionIncome + socialSecurityIncome + interestIncome - homePayment - rentalPayment - carPayment - landPayment - stockPayment -
            boatPayment - recreationalPayment - creditCardPayment - studentPayment - medicalPayment - insurancePayment - utilitiesPayment - cablePayment - phonePayment - entertainmentPayment - foodPayment - clothingPayment - internetPayment}</div>
          <div>Debt to Income Ratio {debtIncome=debtToIncome.toFixed(2) }% </div>
          <div>Mortgage to Income Ratio {homeIncome=homeToIncome.toFixed(2) }% </div>
          <div>Rental Property Cash Flow ${rentalIncome -rentalPayment}</div>
        </div>
      </div>
    );
  }
}

CashFlow.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(CashFlow);