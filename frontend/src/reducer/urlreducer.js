import { GET_URL_FAIL, GET_URL_REQUEST, GET_URL_SUCCESS } from '../constants/urlconstants';

export const getshorturlReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_URL_REQUEST:
            return { loading: true, ...state };
        case GET_URL_SUCCESS:
            return { loading: false, url: action.payload };
        case GET_URL_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}