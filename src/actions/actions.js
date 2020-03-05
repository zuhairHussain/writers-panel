import { authConstants, LOADER_REQUEST } from '../constants/commonConstants';
import { history } from '../history';

export function loginRequest(username, password) {
    return dispatch => {
        dispatch(loader(true));
        dispatch(request());
        setTimeout(() => {
            dispatch(success());
            history.push("/");
            // dispatch(failure("Email not found."));
            dispatch(loader(false));
        }, 4000)
    };

    function request() { return { type: authConstants.LOGIN_REQUEST } }
    function success(user) { return { type: authConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: authConstants.LOGIN_FAILURE, error } }
}

export function loader(show) {
    return { type: LOADER_REQUEST, show }
}