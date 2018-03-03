import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Equity extends React.Component {
  render() {

   
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

          <div>Home and Rental Equity ${homeValue + rentalValue - homeBalance - rentalBalance}</div>

          <div>Car Value ${carValue} Car Loan Balance ${carBalance} </div>
          <div>Car Equity ${carValue - carBalance}</div>
          { boatValue ?
            
            <div>Boat Value ${boatValue} Boat Loan Balance ${boatBalance} 
           Boat Equity ${boatValue - boatBalance} </div>
            :
            null
          }
          { recreationValue ?
            
            <div>Recreational Vehicle Value ${recreationValue} Recreational Vehicle Loan Balance ${recreationalBalance}
            Recreational Equity ${recreationValue - boatBalance} </div> 
            :
            null
          }

          <div>Cash Assets ${savingBalance}</div>
          <div>Stock Assets ${stockValue} Stock Loan Balance ${stockBalance} </div>
          <div>Stock Equity ${stockValue - stockBalance}</div> 




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

export default connect(mapStateToProps)(Equity);