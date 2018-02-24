import React from 'react';
import ReactDOM from 'react-dom';
import './main.css'
import App from './App';
//import { HashRouter } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));