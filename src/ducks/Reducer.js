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





//const UPDATE_USERNAME = 'UPDATE_USERNAME';

function reducer(state = initialState, action) {
        switch (action.type) {
            case WORK_INCOME:
                return Object.assign({}, state, { WORK_INCOME: action.payload })

            // case UPDATE_USER_PASSWORD:
            //     return Object.assign({}, state, { UPDATE_USER_PASSWORD: action.payload })

        }
    }



export function update_workincome(workIncome) {
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

export function update_pensionIncome(pensionIncome) {
    return {
        type: pensionIncome,
        payload: pensionIncome
    }
}

export function update_socialSecurityIncome(socialSecurityIncome) {
    return {
        type: SOCIAL_SECURITY_INCOME,
        payload: socialSecurityIncome
    }
}

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
        payload: recreationalPayment
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
        payload: studentPayment
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

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload });
        default: return state
    }
}









// export default reducer;