import { combineReducers } from 'redux';
import authReducer from './authReducer';
import loaderReducer from './loaderReducer';
import userDataReducer from './userDataReducer';

const reducers = combineReducers({
    authReducer,
    loaderReducer,
    userDataReducer
});

export default reducers;