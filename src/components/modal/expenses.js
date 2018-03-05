import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Expenses extends React.Component {
  render() {

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
        <div className="modalexpenses" >
          {this.props.children}

          <div className="footer">
            <button className="closebtn" onClick={this.props.onClose}>
              Close

            </button>
          </div>
          <div className="modaltitle">Monthly Expenses</div>
          {homePayment ?

            <div>Home Payment  ${homePayment}</div>
            :
            null
          }
          {rentalPayment ?

            <div>Rental Property Payment  ${rentalPayment}</div>
            :
            null
          }
          {landPayment ?

            <div>Land Loan Payment  ${landPayment}</div>
            :
            null
          }
          {stockPayment ?

            <div>Stock Loan Payment  ${stockPayment}</div>
            :
            null
          }
          {boatPayment ?

            <div> Boat Loan Payment  ${boatPayment}</div>
            :
            null
          }
          {recreationalPayment ?

            <div>Recreational Loan Payment  ${recreationalPayment}</div>
            :
            null
          }

          {creditCardPayment ?

            <div>Credit Card Payment  ${creditCardPayment}</div>
            :
            null
          }
          {studentPayment ?

            <div>Student Loan Payment  ${studentPayment}</div>
            :
            null
          }
          {medicalPayment ?

            <div>Medical Bills Payment  ${medicalPayment}</div>
            :
            null
          }

          {insurancePayment ?

            <div>Home and Auto Insurance Payment  ${insurancePayment}</div>
            :
            null
          }
          {utilitiesPayment ?

            <div>Utility Bill Payment  ${utilitiesPayment}</div>
            :
            null
          }
          {cablePayment ?

            <div>Cable Bill Payment  ${cablePayment}</div>
            :
            null
          }
          {phonePayment ?

            <div>Phone Bill Payment  ${phonePayment}</div>
            :
            null
          }
          {entertainmentPayment ?

            <div>Entertainment Expenses ${entertainmentPayment}</div>
            :
            null
          }
          {foodPayment ?

            <div>Foood Expenses ${foodPayment}</div>
            :
            null
          }
          {clothingPayment ?

            <div>Clothing Expenses ${clothingPayment}</div>
            :
            null
          }
          {internetPayment ?

            <div>Internet Bill Payment  ${internetPayment}</div>
            :
            null
          }
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

export default connect(mapStateToProps)(Expenses);