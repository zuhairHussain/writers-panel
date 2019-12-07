import { authConstants } from '../constants/auth';

export function loginRequest() {
    return { type: authConstants.LOGIN_REQUEST }
}
export function loginSuccess(user) {
    return { type: authConstants.LOGIN_SUCCESS, user }
}
export function loginError(user) {
    return { type: authConstants.LOGIN_SUCCESS, user }
}