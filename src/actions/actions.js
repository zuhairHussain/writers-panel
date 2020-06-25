import { authConstants, LOADER_REQUEST, userDataConstants } from '../constants/commonConstants';
import { userService } from '../services/services';
import { history } from '../history';

export function loginRequest(email, password) {
    return dispatch => {
        dispatch(loader(true));
        dispatch(request({ email }));

        userService.login(email, password)
            .then(
                user => {
                    if (user.success) {
                        dispatch(loader(false));
                        dispatch(success(user));
                        history.push('/dashboard');
                    } else {
                        dispatch(loader(false));
                        dispatch(failure(user.message.toString()));
                    }
                },
                error => {
                    dispatch(loader(false));
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request() { return { type: authConstants.LOGIN_REQUEST } }
    function success(user) { return { type: authConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: authConstants.LOGIN_FAILURE, error } }
}

export function registerRequest(name, email, password) {
    return dispatch => {
        dispatch(loader(true));
        dispatch(request({ email }));

        userService.register(name, email, password)
            .then(
                user => {
                    if (user.success) {
                        dispatch(loader(false));
                        dispatch(success(user));
                        history.push('/dashboard');
                    } else {
                        dispatch(loader(false));
                        dispatch(failure(user.message.toString()));
                    }
                },
                error => {
                    dispatch(loader(false));
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request() { return { type: authConstants.REGISTER_REQUEST } }
    function success(user) { return { type: authConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: authConstants.REGISTER_FAILURE, error } }
}

export function logoutRequest() {
    userService.logout();
    history.push('/dashboard/login');
    return { type: authConstants.LOGOUT };
}

export function userData() {
    return dispatch => {
        dispatch(loader(true));
        dispatch(request());
        setTimeout(() => {
            dispatch(success([
                { id: 1, title: "Test Corp", pages: 20, academic_level: "Phd", status: "recent" },
                { id: 2, title: "Test Corp", pages: 56, academic_level: "Phd", status: "finished" },
                { id: 3, title: "Test Corp", pages: 69, academic_level: "Phd", status: "canceled" },
                { id: 4, title: "Test Corp", pages: 10, academic_level: "Phd", status: "recent" },
            ]));
            //dispatch(failure("Data not found! Please try again."));
            dispatch(loader(false));
        }, 4000)
    };

    function request() { return { type: userDataConstants.FETCH_DATA } }
    function success(data) { return { type: userDataConstants.FETCH_DATA_SUCCESS, data } }
    function failure(error) { return { type: userDataConstants.FETCH_DATA_FAILURE, error } }
}

export function loader(show) {
    return { type: LOADER_REQUEST, show }
}