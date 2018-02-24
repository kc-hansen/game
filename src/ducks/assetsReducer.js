
import axios from 'axios';

const initialState = {
    user: {},
    savingBalance: 0,
    homeValue: 0,
    rentalValue: 0,
    carValue: 0,
    landValue: 0,
    stockValue: 0,
    boatValue: 0,
    recreationValue: 0,
}

const GET_USER = 'GET_USER';
const SAVING_BALANCE = 'SAVING_BALANCE';
const HOME_VALUE = 'HOME_VALUE';
const RENTAL_VALUE = 'RENTAL_VALUE';
const CAR_VALUE = 'CAR_VALUE';
const LAND_VALUE = 'LAND_VALUE';
const STOCK_VALUE = 'STOCK_VALUE';
const BOAT_VALUE = 'BOAT_VALUE';
const RECREATION_VALUE = 'RECREATION_VALUE';



function reducer(state = initialState, action) {
    switch (action.type) {
        case HOME_VALUE:
            return Object.assign({}, state, { HOME_VALUE: action.payload })

        // case UPDATE_USER_PASSWORD:
        //     return Object.assign({}, state, { UPDATE_USER_PASSWORD: action.payload })

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

