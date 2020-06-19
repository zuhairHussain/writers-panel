import { authConstants, LOADER_REQUEST, userDataConstants } from '../constants/commonConstants';
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