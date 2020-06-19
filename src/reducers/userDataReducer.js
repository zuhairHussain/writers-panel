import { userDataConstants } from '../constants/commonConstants';
const initialState = {
    errorMessage: "",
    data: [],
    loading: false
}

export default function userDataReducer(state = initialState, action) {
    switch (action.type) {
        case userDataConstants.FETCH_DATA:
            return { errorMessage: "", data: [], loading: true }
        case userDataConstants.FETCH_DATA_SUCCESS:
            return { errorMessage: "", data: action.data, loading: false }
        case userDataConstants.FETCH_DATA_FAILURE:
            return { errorMessage: action.error, data: [], loading: false }
        default:
            return state
    }
}