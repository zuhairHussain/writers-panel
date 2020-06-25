import { combineReducers } from 'redux';
import { authReducer, registerReducer } from './authReducer';
import loaderReducer from './loaderReducer';
import userDataReducer from './userDataReducer';

const reducers = combineReducers({
    authReducer,
    registerReducer,
    loaderReducer,
    userDataReducer
});

export default reducers;