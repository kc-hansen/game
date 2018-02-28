import axios from 'axios';

const initialState = {
    user: {},
    workIncome: 0,
    rentalIncome: 0,
    royaltyIncome: 0,
    pensionIncome: 0,
    socialSecurityIncome: 0,
    interestIncome: 0,
    savingBalance: 0,
    homeValue: 0,
    rentalValue: 0,
    carValue: 0,
    landValue: 0,
    stockValue: 0,
    boatValue: 0,
    recreationValue: 0,
    homeBalance: 0,
    rentalBalance: 0,
    carBalance: 0,
    landBalance: 0,
    stockBalance: 0,
    boatBalance: 0,
    recreationalBalance: 0,
    creditCardBalance: 0,
    studentBalance: 0,
    medicalBalance: 0,
    homePayment: 0,
    rentalPayment: 0,
    carPayment: 0,
    landPayment: 0,
    stockPayment: 0,
    boatPayment: 0,
    recreationalPayment: 0,
    creditCardPayment: 0,
    studentPayment: 0,
    medicalPayment: 0,
    insurancePayment: 0,
    utilitiesPayment: 0,
    cablePayment: 0,
    phonePayment: 0,
    entertainmentPayment: 0,
    foodPayment: 0,
    clothingPayment: 0,
    internetPayment: 0,
}
const ALL_INFO = 'ALL_INFO';

const GET_USER = 'GET_USER';
const WORK_INCOME = 'WORK_INCOME';
const RENTAL_INCOME = 'RENTAL_INCOME';
const ROYALTY_INCOME = 'ROYALTY_INCOME';
const PENSION_INCOME = 'PENSION_INCOME';
const SOCIAL_SECURITY_INCOME = 'SOCIAL_SECURITY_INCOME';
const INTEREST_INCOME = 'INTEREST_INCOME';
const SAVING_BALANCE = 'SAVING_BALANCE';
const HOME_VALUE = 'HOME_VALUE';
const RENTAL_VALUE = 'RENTAL_VALUE';
const CAR_VALUE = 'CAR_VALUE';
const LAND_VALUE = 'LAND_VALUE';
const STOCK_VALUE = 'STOCK_VALUE';
const BOAT_VALUE = 'BOAT_VALUE';
const RECREATION_VALUE = 'RECREATION_VALUE';
const HOME_BALANCE = 'HOME_BALANCE';
const RENTAL_BALANCE = 'RENTAL_BALANCE';
const CAR_BALANCE = 'CAR_BALANCE';
const LAND_BALANCE = 'LAND_BALANCE';
const STOCK_BALANCE = 'STOCK_BALANCE';
const BOAT_BALANCE = 'BOAT_BALANCE';
const RECREATION_BALANCE = 'RECREATION_BALANCE';
const CREDIT_CARD_BALANCE = 'CREDIT_CARD_BALANCE';
const STUDENT_BALANCE = 'STUDENT_BALANCE';
const MEDICAL_BALANCE = 'MEDICAL_BALANCE';
const HOME_PAYMENT = 'HOME_PAYMENT';
const RENTAL_PAYMENT = 'RENTAL_PAYMENT';
const CAR_PAYMENT = 'CAR_PAYMENT';
const LAND_PAYMENT = 'LAND_PAYMENT';
const STOCK_PAYMENT = 'STOCK_PAYMENT';
const BOAT_PAYMENT = 'BOAT_PAYMENT';
const RECREATION_PAYMENT = 'RECREATION_PAYMENT';
const CREDIT_CARD_PAYMENT = 'CREDIT_CARD_PAYMENT';
const STUDENT_PAYMENT = 'STUDENT_PAYMENT';
const MEDICAL_PAYMENT = 'MEDICAL_PAYMENT';
const INSURANCE_PAYMENT = 'INSURANCE_PAYMENT';
const UTILITIES_PAYMENT = 'UTILITIES_PAYMENT';
const CABLE_PAYMENT = 'CABLE_PAYMENT';
const PHONE_PAYMENT = 'PHONE_PAYMENT';
const ENTERTAINMENT_PAYMENT = 'ENTERTAINMENT_PAYMENT';
const FOOD_PAYMENT = 'FOOD_PAYMENT';
const CLOTHING_PAYMENT = 'CLOTHING_PAYMENT';
const INTERNET_PAYMENT = 'INTERNET_PAYMENT';





export function getUser() {

    const user = axios.get('/auth/me').then(res => {
        console.log(res.data)
        return res.data;
    })
    return {
        type: GET_USER,
        payload: user
    }
}

export function allInfo() {
    return {
        type: ALL_INFO,
        payload: axios.get('/geteverything').then(res => {
            const arr = res.data[0].concat(res.data[1]).concat(res.data[2]).concat(res.data[3])
            const obj = Object.assign({}, arr[0], arr[1], arr[2], arr[3])
            return obj;
            
        })
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ALL_INFO + '_FULFILLED':
        const reduxObj = {
            workIncome: action.payload.job_income,
            rentalIncome: action.payload.rental_income,
            royaltyIncome: action.payload.royalty_income,
            pensionIncome: action.payload.pension_income,
            socialSecurityIncome: action.payload.social_security_income,
            interestIncome: action.payload.interest_income,
            savingBalance: action.payload.cash,
            homeValue: action.payload.home,
            rentalValue: action.payload.rental,
            carValue: action.payload.car,
            landValue: action.payload.land,
            stockValue: action.payload.stocks,
            boatValue: action.payload.boat,
            recreationValue: action.payload.recreational_vehicles,
            homeBalance: action.payload.home_loan,
            rentalBalance: action.payload.rental_loan,
            carBalance: action.payload.car_loan,
            landBalance: action.payload.land_loan,
            stockBalance: action.payload.stocks_loan,
            boatBalance: action.payload.boat_loan,
            recreationalBalance: action.payload.recreational_vehicles_loan,
            creditCardBalance: action.payload.credit_card_loan,
            studentBalance: action.payload.student_debt_loan,
            medicalBalance: action.payload.medical_expenses,
            homePayment: action.payload.home_loan_payment,
            rentalPayment: action.payload.rental_loan_payment,
            carPayment: action.payload.car_loan_payment,
            landPayment: action.payload.land_loan_payment,
            stockPayment: action.payload.stocks_loan_payment,
            boatPayment: action.payload.boat_loan_payment,
            recreationalPayment: action.payload.recreational_vehicles_loan_payment,
            creditCardPayment: action.payload.credit_card_loan_payment,
            studentPayment: action.payload.student_debt_loan_payment,
            medicalPayment: action.payload.medical_expenses_payment,
            insurancePayment: action.payload.home_car_insurance_payment,
            utilitiesPayment: action.payload.utilities_payment,
            cablePayment: action.payload.cable_payment,
            phonePayment: action.payload.phone_payment,
            entertainmentPayment: action.payload.entertainment_payment,
            foodPayment: action.payload.food_payment,
            clothingPayment: action.payload.clothing_payment,
            internetPayment: action.payload.internet_payment
    }
        return Object.assign({}, state, reduxObj);
            

        case GET_USER + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload });
        case WORK_INCOME + '_FULFILLED':
            return Object.assign({}, state, { workIncome: action.payload });
        case RENTAL_INCOME + '_FULFILLED':
            return Object.assign({}, state, { rentalIncome: action.payload });
        case ROYALTY_INCOME + '_FULFILLED':
            return Object.assign({}, state, { royaltyIncome: action.payload });
        case INTEREST_INCOME + '_FULFILLED':
            return Object.assign({}, state, { interestIncome: action.payload });
        case SAVING_BALANCE + '_FULFILLED':
            return Object.assign({}, state, { savingBalance: action.payload });
        case HOME_VALUE + '_FULFILLED':
            return Object.assign({}, state, { homeValue: action.payload });
        case RENTAL_VALUE + '_FULFILLED':
            return Object.assign({}, state, { rentalValue: action.payload });
        case CAR_VALUE + '_FULFILLED':
            return Object.assign({}, state, { carValue: action.payload });
        case BOAT_VALUE + '_FULFILLED':
            return Object.assign({}, state, { boatValue: action.payload });
        case RECREATION_VALUE + '_FULFILLED':
            return Object.assign({}, state, { recreationValue: action.payload });
        case STOCK_VALUE + '_FULFILLED':
            return Object.assign({}, state, { stockValue: action.payload });
        case HOME_BALANCE + '_FULFILLED':
            return Object.assign({}, state, { homeBalance: action.payload });
        case RENTAL_BALANCE + '_FULFILLED':
            return Object.assign({}, state, { rentalBalance: action.payload });
        case CAR_BALANCE + '_FULFILLED':
            return Object.assign({}, state, { carBalance: action.payload });
        case LAND_BALANCE + '_FULFILLED':
            return Object.assign({}, state, { landBalance: action.payload });
        case STOCK_BALANCE + '_FULFILLED':
            return Object.assign({}, state, { stockBalance: action.payload });
        case BOAT_BALANCE + '_FULFILLED':
            return Object.assign({}, state, { boatBalance: action.payload });
        case RECREATION_BALANCE + '_FULFILLED':
            return Object.assign({}, state, { recreationalBalance: action.payload });
        case CREDIT_CARD_BALANCE + '_FULFILLED':
            return Object.assign({}, state, { creditCardBalance: action.payload });
        case STUDENT_BALANCE + '_FULFILLED':
            return Object.assign({}, state, { studentBalance: action.payload });
        case MEDICAL_BALANCE + '_FULFILLED':
            return Object.assign({}, state, { medicalBalance: action.payload });
        case HOME_PAYMENT + '_FULFILLED':
            return Object.assign({}, state, { homePayment: action.payload });
        case RENTAL_PAYMENT + '_FULFILLED':
            return Object.assign({}, state, { rentalPayment: action.payload });
        case CAR_PAYMENT + '_FULFILLED':
            return Object.assign({}, state, { carPayment: action.payload });
        case LAND_PAYMENT + '_FULFILLED':
            return Object.assign({}, state, { landPayment: action.payload });
        case STOCK_PAYMENT + '_FULFILLED':
            return Object.assign({}, state, { stockPayment: action.payload });
        case BOAT_PAYMENT + '_FULFILLED':
            return Object.assign({}, state, { boatPayment: action.payload });
        case RECREATION_PAYMENT + '_FULFILLED':
            return Object.assign({}, state, { recreationalPayment: action.payload });
        case CREDIT_CARD_PAYMENT + '_FULFILLED':
            return Object.assign({}, state, { creditCardPayment: action.payload });
        case STUDENT_PAYMENT + '_FULFILLED':
            return Object.assign({}, state, { studentPayment: action.payload });
        case MEDICAL_PAYMENT + '_FULFILLED':
            return Object.assign({}, state, { medicalPayment: action.payload });
        case INSURANCE_PAYMENT + '_FULFILLED':
            return Object.assign({}, state, { insurancePayment: action.payload });
        case UTILITIES_PAYMENT + '_FULFILLED':
            return Object.assign({}, state, { utilitiesPayment: action.payload });
        case CABLE_PAYMENT + '_FULFILLED':
            return Object.assign({}, state, { cablePayment: action.payload });
        case PHONE_PAYMENT + '_FULFILLED':
            return Object.assign({}, state, { phonePayment: action.payload });
        case ENTERTAINMENT_PAYMENT + '_FULFILLED':
            return Object.assign({}, state, { entertainmentPayment: action.payload });
        case FOOD_PAYMENT + '_FULFILLED':
            return Object.assign({}, state, { foodPayment: action.payload });
        case CLOTHING_PAYMENT + '_FULFILLED':
            return Object.assign({}, state, { clothingPayment: action.payload });
        case INTERNET_PAYMENT + '_FULFILLED':
            return Object.assign({}, state, { internetPayment: action.payload });

        default: return state

    }
}

// case UPDATE_USER_PASSWORD:
//     return Object.assign({}, state, { UPDATE_USER_PASSWORD: action.payload })


export function update_workIncome(workIncome) {
    return {
        type: WORK_INCOME,
        payload: workIncome
    }
}

export function update_rentalIncome(rentalIncome) {
    return {
        type: RENTAL_INCOME,
        payload: rentalIncome
    }
}

export function update_royaltyIncome(royaltyIncome) {
    return {
        type: ROYALTY_INCOME,
        payload: royaltyIncome
    }
}

// export function update_pensionIncome(pensionIncome) {
//     return {
//         type: pensionIncome,
//         payload: pensionIncome
//     }
// }

// export function update_socialSecurityIncome(socialSecurityIncome) {
//     return {
//         type: SOCIAL_SECURITY_INCOME,
//         payload: socialSecurityIncome
//     }
// }

export function update_interestIncome(interestIncome) {
    return {
        type: INTEREST_INCOME,
        payload: interestIncome
    }
}
export function update_savingBalance(savingBalance) {
    return {
        type: SAVING_BALANCE,
        payload: savingBalance
    }
}

export function update_homeValue(homeValue) {
    return {
        type: HOME_VALUE,
        payload: homeValue
    }
}

export function update_rentalValue(rentalValue) {
    return {
        type: RENTAL_VALUE,
        payload: rentalValue
    }
}

export function update_carValue(carValue) {
    return {
        type: CAR_VALUE,
        payload: carValue
    }
}

export function update_landValue(landValue) {
    return {
        type: LAND_VALUE,
        payload: landValue
    }
}

export function update_stockValue(stockValue) {
    return {
        type: STOCK_VALUE,
        payload: stockValue
    }
}

export function update_boatValue(boatValue) {
    return {
        type: BOAT_VALUE,
        payload: boatValue
    }
}

export function update_recreationValue(recreationValue) {
    return {
        type: RECREATION_VALUE,
        payload: recreationValue
    }
}

export function update_homeBalance(homeBalance) {
    return {
        type: HOME_BALANCE,
        payload: homeBalance
    }
}

export function update_rentalBalance(rentalBalance) {
    return {
        type: RENTAL_BALANCE,
        payload: rentalBalance
    }
}

export function update_carBalance(carBalance) {
    return {
        type: CAR_BALANCE,
        payload: carBalance
    }
}

export function update_landBalance(landBalance) {
    return {
        type: LAND_BALANCE,
        payload: landBalance
    }
}

export function update_stockBalance(stockBalance) {
    return {
        type: STOCK_BALANCE,
        payload: stockBalance
    }
}

export function update_boatBalance(boatBalance) {
    return {
        type: BOAT_BALANCE,
        payload: boatBalance
    }
}

export function update_recreationalBalance(recreationalBalance) {
    return {
        type: RECREATION_BALANCE,
        payload: recreationalBalance
    }
}

export function update_creditCardBalance(creditCardBalance) {
    return {
        type: CREDIT_CARD_BALANCE,
        payload: creditCardBalance
    }
}

export function update_studentBalance(studentBalance) {
    return {
        type: STUDENT_BALANCE,
        payload: studentBalance
    }
}

export function update_medicalBalance(medicalBalance) {
    return {
        type: MEDICAL_BALANCE,
        payload: medicalBalance
    }
}

export function update_homePaymanet(homePayment) {
    return {
        type: HOME_PAYMENT,
        payload: homePayment
    }
}

export function update_rentalPayment(rentalPayment) {
    return {
        type: RENTAL_PAYMENT,
        payload: rentalPayment
    }
}

export function update_carPayment(carPayment) {
    return {
        type: CAR_PAYMENT,
        payload: carPayment
    }
}

export function update_landPayment(landPayment) {
    return {
        type: LAND_PAYMENT,
        payload: landPayment
    }
}

export function update_stockPayment(stockPayment) {
    return {
        type: STOCK_PAYMENT,
        payload: stockPayment
    }
}

export function update_boatPayment(boatPayment) {
    return {
        type: BOAT_PAYMENT,
        payload: boatPayment
    }
}

export function update_recreactionalPayment(recreationalPayment) {
    return {
        type: RECREATION_PAYMENT,
        payload: recreationalPayment,
    }
}

export function update_creditCardPayment(creditCardPayment) {
    return {
        type: CREDIT_CARD_PAYMENT,
        payload: creditCardPayment
    }
}

export function update_studentPayment(studentPayment) {
    return {
        type: STUDENT_PAYMENT,
        payload: studentPayment,
    }
}

export function update_medicalPayment(medicalPayment) {
    return {
        type: MEDICAL_PAYMENT,
        payload: medicalPayment
    }
}

export function update_insurancePayment(insurancePayment) {
    return {
        type: INSURANCE_PAYMENT,
        payload: insurancePayment
    }
}

export function update_utilitiesPayment(utilitiesPayment) {
    return {
        type: UTILITIES_PAYMENT,
        payload: utilitiesPayment
    }
}

export function update_cablePayment(cablePayment) {
    return {
        type: CABLE_PAYMENT,
        payload: cablePayment
    }
}

export function update_phonePayment(phonePayment) {
    return {
        type: PHONE_PAYMENT,
        payload: phonePayment
    }
}

export function update_entertainmentPayment(entertainmentPayment) {
    return {
        type: ENTERTAINMENT_PAYMENT,
        payload: entertainmentPayment
    }
}

export function update_foodPayment(foodPayment) {
    return {
        type: FOOD_PAYMENT,
        payload: foodPayment
    }
}

export function update_clothingPayment(clothingPayment) {
    return {
        type: CLOTHING_PAYMENT,
        payload: clothingPayment
    }
}

export function update_internetPayment(internetPayment) {
    return {
        type: INTERNET_PAYMENT,
        payload: internetPayment
    }
}










