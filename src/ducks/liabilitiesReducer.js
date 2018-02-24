import axios from 'axios';

const initialState = {
    user: {},
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
}

const GET_USER = 'GET_USER';
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



function reducer(state = initialState, action) {
    switch (action.type) {
        case HOME_BALANCE:
            return Object.assign({}, state, { HOME_BALANCE: action.payload })

        // case UPDATE_USER_PASSWORD:
        //     return Object.assign({}, state, { UPDATE_USER_PASSWORD: action.payload })

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

