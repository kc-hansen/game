
import axios from 'axios';



export function everything(){
    const {workIncome,
        rentalIncome,
        royaltyIncome,
        pensionIncome,
        socialSecurityIncome,
        interestIncome,
        savingBalance,
        homeValue,
        rentalValue,
        carValue,
        landValue,
        stockValue,
        boatValue,
        recreationValue,
        homeBalance,
        rentalBalance,
        carBalance,
        landBalance,
        stockBalance,
        boatBalance,
        recreationalBalance,
        creditCardBalance,
        studentBalance,
        medicalBalance,
        homePayment,
        rentalPayment,
        carPayment,
        landPayment,
        stockPayment,
        boatPayment,
        recreationalPayment,
        creditCardPayment,
        studentPayment,
        medicalPayment,
        insurancePayment,
        utilitiesPayment,
        cablePayment,
        phonePayment,
        entertainmentPayment,
        foodPayment,
        clothingPayment,
        internetPayment,} = axios.get('/geteverything').then( res =>{
        console.log(res.data)
        return res.data;
    })
    return {
        type: INTERNET_PAYMENT,
        payload: internetPayment,
        type: CLOTHING_PAYMENT,
        payload: clothingPayment,
        type: FOOD_PAYMENT,
        payload: foodPayment,
        type: ENTERTAINMENT_PAYMENT,
        payload: entertainmentPayment,
        type: PHONE_PAYMENT,
        payload: phonePayment,
        type: CABLE_PAYMENT,
        payload: cablePayment,
        type: UTILITIES_PAYMENT,
        payload: utilitiesPayment,
        type: INSURANCE_PAYMENT,
        payload: insurancePayment,
        type: MEDICAL_PAYMENT,
        payload: medicalPayment,
        type: STUDENT_PAYMENT,
        payload: studentPayment,
        type: CREDIT_CARD_PAYMENT,
        payload: creditCardPayment,
        type: RECREATION_PAYMENT,
        payload: recreationalPayment,
        type: BOAT_PAYMENT,
        payload: boatPayment,
        type: STOCK_PAYMENT,
        payload: stockPayment,
        type: LAND_PAYMENT,
        payload: landPayment,
        type: CAR_PAYMENT,
        payload: carPayment,
        type: RENTAL_PAYMENT,
        payload: rentalPayment,
        type: HOME_PAYMENT,
        payload: homePayment,
        type: MEDICAL_BALANCE,
        payload: medicalBalance,
        type: STUDENT_BALANCE,
        payload: studentBalance,
        type: CREDIT_CARD_BALANCE,
        payload: creditCardBalance,
        type: RECREATION_BALANCE,
        payload: recreationalBalance,
        type: BOAT_BALANCE,
        payload: boatBalance,
        type: STOCK_BALANCE,
        payload: stockBalance,
        type: LAND_BALANCE,
        payload: landBalance,
        type: CAR_BALANCE,
        payload: carBalance,
        type: RENTAL_BALANCE,
        payload: rentalBalance,
        type: HOME_BALANCE,
        payload: homeBalance,
        type: STOCK_VALUE,
        payload: stockValue,
        type: LAND_VALUE,
        payload: landValue,
        type: RENTAL_VALUE,
        payload: rentalValue,
        type: HOME_VALUE,
        payload: homeValue,
        type: SAVING_BALANCE,
        payload: savingBalance,
        type: INTEREST_INCOME,
        payload: interestIncome,
        type: ROYALTY_INCOME,
        payload: royaltyIncome,
        type: RENTAL_INCOME,
        payload: rentalIncome,
        type: WORK_INCOME,
        payload: workIncome,


        type: BOAT_VALUE,
        payload: boatValue,
        type: RECREATION_VALUE,
        payload: recreationValue,

    }
}   

// const initialState = {
//     user: {},
//     savingBalance: 0,
//     homeValue: 0,
//     rentalValue: 0,
//     carValue: 0,
//     landValue: 0,
//     stockValue: 0,
//     boatValue: 0,
//     recreationValue: 0,
// }

// const GET_USER = 'GET_USER';
// const SAVING_BALANCE = 'SAVING_BALANCE';
// const HOME_VALUE = 'HOME_VALUE';
// const RENTAL_VALUE = 'RENTAL_VALUE';
// const CAR_VALUE = 'CAR_VALUE';
// const LAND_VALUE = 'LAND_VALUE';
// const STOCK_VALUE = 'STOCK_VALUE';
// const BOAT_VALUE = 'BOAT_VALUE';
// const RECREATION_VALUE = 'RECREATION_VALUE';



// function reducer(state = initialState, action) {
//     switch (action.type) {
//         case HOME_VALUE:
//             return Object.assign({}, state, { HOME_VALUE: action.payload })

//         // case UPDATE_USER_PASSWORD:
//         //     return Object.assign({}, state, { UPDATE_USER_PASSWORD: action.payload })

//     }
// }

// export function update_savingBalance(savingBalance) {
//     return {
//         type: SAVING_BALANCE,
//         payload: savingBalance
//     }
// }

// export function update_homeValue(homeValue) {
//     return {
//         type: HOME_VALUE,
//         payload: homeValue
//     }
// }

// export function update_rentalValue(rentalValue) {
//     return {
//         type: RENTAL_VALUE,
//         payload: rentalValue
//     }
// }

// export function update_carValue(carValue) {
//     return {
//         type: CAR_VALUE,
//         payload: carValue
//     }
// }

// export function update_landValue(landValue) {
//     return {
//         type: LAND_VALUE,
//         payload: landValue
//     }
// }

// export function update_stockValue(stockValue) {
//     return {
//         type: STOCK_VALUE,
//         payload: stockValue
//     }
// }

// export function update_boatValue(boatValue) {
//     return {
//         type: BOAT_VALUE,
//         payload: boatValue
//     }
// }

// export function update_recreationValue(recreationValue) {
//     return {
//         type: RECREATION_VALUE,
//         payload: recreationValue
//     }
// }


// export function getUser() {

//     const user = axios.get('/auth/me').then(res => {
//         console.log(res.data)
//         return res.data;
//     })
//     return {
//         type: GET_USER,
//         payload: user
//     }
// }

// export default function reducer(state = initialState, action) {
//     switch (action.type) {
//         case GET_USER + '_FULFILLED':
//             return Object.assign({}, state, { user: action.payload });
//         default: return state
//     }
// }

