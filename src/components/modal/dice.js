import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser, allInfo, update_savingBalance, update_cablePayment, update_stockValue, update_homeValue, update_workIncome } from './../../ducks/Reducer';




class Dice extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tile1: "You Landed on Investment Opportunity!",
            tile2: "You Landed on a politically correct, yet terrible financial event!",
            tile3: "You Landed on good financial event!",
            tile4: "You Landed on Payday!",
            tile5: "You Landed on a mehhhh financial event!",
            saving: 0,
            totalIncome: 0,
            totalExpenses: 0,
            cashFlow: 0,
            propertyValue: 0,
            stockvalue: 0,
            output: "",
            dropDown: 0,


        


        }
        this.whatIf = this.whatIf.bind(this);
        this.financialEvent = this.financialEvent.bind(this);
        this.payday = this.payday.bind(this);
        this.water = this.water.bind(this);
        this.stock = this.stock.bind(this);
        this.confirm = this.confirm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.lostJob = this.lostJob.bind(this);
        this.job = this.job.bind(this);
        this.comcast = this.comcast.bind(this);
        this.date = this.date.bind(this);
        this.bonus = this.bonus.bind(this);

    }


    componentWillReceiveProps(props, oldprops) {
        this.setState({
            saving: this.props.savingBalance,
            cashFlow: (this.props.workIncome + this.props.rentalIncome + this.props.royaltyIncome +
                this.props.pensionIncome + this.props.socialSecurityIncome + this.props.interestIncome - this.props.homePayment - this.props.rentalPayment - this.props.carPayment
                - this.props.landPayment - this.props.stockPayment - this.props.boatPayment - this.props.recreationalPayment - this.props.creditCardPayment - this.props.studentPayment
                - this.props.medicalPayment - this.props.insurancePayment - this.props.utilitiesPayment - this.props.cablePayment - this.props.phonePayment - this.props.entertainmentPayment
                - this.props.foodPayment - this.props.clothingPayment - this.props.internetPayment),
            totalIncome: (this.props.workIncome + this.props.rentalIncome + this.props.royaltyIncome +
                this.props.pensionIncome + this.props.socialSecurityIncome + this.props.interestIncome),
            totalExpenses: (this.props.homePayment + this.props.rentalPayment + this.props.carPayment
                + this.props.landPayment + this.props.stockPayment + this.props.boatPayment + this.props.recreationalPayment + this.props.creditCardPayment + this.props.studentPayment
                + this.props.medicalPayment + this.props.insurancePayment + this.props.utilitiesPayment + this.props.cablePayment + this.props.phonePayment + this.props.entertainmentPayment
                + this.props.foodPayment + this.props.clothingPayment + this.props.internetPayment),

        })
    }

    onetime() {

        if (this.props.clicked) {
            this.financialEvent()
            this.props.updateClicked()
        }
    }

    payday() {

        let cashFlow = this.state.cashFlow;
        let saving = this.state.saving

        this.props.update_savingBalance(this.props.savingBalance + cashFlow)
        this.props.update_homeValue(this.props.homeValue * 1.01)
        this.props.update_stockValue(this.props.stockValue * 1.03)


        return (<div className='modalfunction'>
            <div>Monthly Pay after Expenses!</div>
            <div>Your new Cash Balance is ${saving}</div>
            <div>Your new Property Value is {this.props.homeValue}</div>
            <div>Your new Stock Value is {this.props.stockValue}</div>
        </div>)

    }

    water() {

        let saving = this.state.saving

        this.props.update_savingBalance(this.props.savingBalance - 500)

        return (<div className='modalfunction'>
            <div>Water Heater Exploded!</div>
            <div></div>
            <div>Sorry!</div>
            <div>New Water Heater is $500, cause you dont want a</div>
            <div>cold shower. Your new Cash Balance is ${saving - 500}</div>

        </div>)
    }

    lostJob() {

        this.props.update_workIncome(0)

        return (<div className='modalfunction'>
            <div>Lost your job!</div>
            <div>Lost all your work Income</div>
            <div></div>
            <div>Current Work Income $0</div>

        </div>)
    }

    bonus(){

        this.props.update_savingBalance(this.props.savingBalance + 2000)

        return (<div className='modalfunction'>
            <div>Got a bonus for being awesome!</div>
            <div>$2000 added to your Savings</div>
        </div>)
    }

    job() {
        this.props.update_workIncome(7400)

        return (<div className='modalfunction'>
            <div>Got a sweet new Web Dev Job!</div>
            <div>Your new income is $7,400 a Month!</div>
            <div></div>
            <div></div>
        </div>)
    }

    stock() {

        let saving = this.state.saving

        return (<div className='modalfunction'>
            <div>Stock Buying Opportunity</div>
            <div>Your Cash Balance is ${saving}</div>
            <div>Current Stock Value is {this.props.stockValue}</div>
            <div>How much stock would you like to buy?  <select onChange={(e) => { this.handleChange(e.target.value) }}>
                <option value="0">0</option>
                <option value="500">500</option>
                <option value="1000">1000</option>
                <option value="10000">10000</option>
            </select>
                <button onClick={this.confirm}>Submit</button> </div>
        </div>)
    }

    date() {
        this.props.update_savingBalance(this.props.savingBalance - 100)

        return (<div className='modalfunction'>
            <div >You went on a fancy date!</div>
            <div>It was fun and only cost you $100!</div>
        </div>)
    }

    comcast() {

        this.props.update_cablePayment(0)

        return (<div className='modalfunction'>
            <div>You just had another wonderful experience</div>
            <div>with Comcast. Based on that </div>
            <div>experience you decided to</div>
            <div>cancel your cable subscription. </div>
            <div>Cable Payment is reduced to 0</div>
        </div>)
    }

    confirm() {

        this.props.update_stockValue(this.props.stockValue + Number(this.state.dropDown))
        this.props.update_savingBalance(this.props.savingBalance - Number(this.state.dropDown))
        alert(`You successfully purchased $${this.state.dropDown} worth of Stock!`)
    }
    handleChange(value) {

        this.setState({ dropDown: value })

    }

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

    financialEvent() {
        let output = output;
        let random = Math.floor(Math.random() * 2) + 1
        switch (this.props.position) {
            case 1: case 6: case 11: case 16:
                if (random === 1) { output = this.stock() }
                else { output = this.stock() }
                break;
            case 2: case 7: case 12: case 17:
                if (random === 1) { output = this.lostJob() }
                else { output = this.water() }
                break;
            case 3: case 8: case 13: case 18:
                if (random === 1) { output = this.bonus() }
                else { output = this.job() }
                break;
            case 4: case 9: case 14: case 19:
                if (random === 1) { output = this.payday() }
                else { output = this.payday() }
                break;
            case 5: case 10: case 15: case 20:
                if (random === 1) { output = this.date() }
                else { output = this.comcast() }
                break;
            default:
                break;
        } this.setState({ output: output })
        return output;
    }



    render() {
        this.onetime()
        let roll = this.props.roll
        
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
                    <div>{this.state.output}</div>

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
    console.log('map to state', state.savingBalance, state.homeValue, state.stockValue)
    return state

}

export default connect(mapStateToProps, { update_cablePayment, getUser, allInfo, update_savingBalance, update_stockValue, update_homeValue, update_workIncome })(Dice);