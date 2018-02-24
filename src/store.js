import {createStore, applyMiddleware} from 'redux';
import Reducer from './ducks/Reducer';
import promiseMiddleware from 'redux-promise-middleware';


export default createStore(Reducer, applyMiddleware ( promiseMiddleware()));