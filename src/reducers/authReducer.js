import { authConstants } from '../constants/commonConstants';
const initialState = {
    isLogin: false,
    loginErrorMessage: "",
    user: "",
    loading: false
}

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            return { isLogin: false, loginErrorMessage: "", user: '', loading: true }
        case authConstants.LOGIN_SUCCESS:
            return { isLogin: true, loginErrorMessage: "", user: action.user, loading: false }
        case authConstants.LOGIN_FAILURE:
            return { isLogin: false, loginErrorMessage: action.error, user: '', loading: false }
        case authConstants.LOGOUT:
            return { isLogin: false, loginErrorMessage: '', user: '', loading: false };
        default:
            return state
    }
}

const registrationInitialState = {
    isRegister: false,
    registerErrorMessage: "",
    user: ""
}

export function registerReducer(state = registrationInitialState, action) {
    switch (action.type) {
        case authConstants.REGISTER_REQUEST:
            return { isRegister: false, registerErrorMessage: "", user: '' }
        case authConstants.REGISTER_SUCCESS:
            return { isRegister: true, registerErrorMessage: "", user: action.user }
        case authConstants.REGISTER_FAILURE:
            return { isRegister: false, registerErrorMessage: action.error, user: '' }
        default:
            return state
    }
}