import 'core-js/es/map';
import 'core-js/es/set';
import 'raf/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store'
import App from './views/App';
import * as serviceWorker from './serviceWorker';
import './assets/scss/App.scss';
// import displayNotification from "./services/helper";

// if ('Notification' in window && navigator.serviceWorker) {
//     Notification.requestPermission(function (status) {
//         console.log('Notification permission status:', status);
//     });
// }
// displayNotification();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
