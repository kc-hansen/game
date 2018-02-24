import axios from 'axios';

const initialState = {
    user: {},
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
        case HOME_PAYMENT:
            return Object.assign({}, state, { HOME_PAYMENT: action.payload })

        // case UPDATE_USER_PASSWORD:
        //     return Object.assign({}, state, { UPDATE_USER_PASSWORD: action.payload })

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

