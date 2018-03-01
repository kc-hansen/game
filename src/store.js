import {createStore, applyMiddleware} from 'redux';
import Reducer from './ducks/Reducer';
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension' 

export default createStore(Reducer, composeWithDevTools(applyMiddleware(promiseMiddleware())));