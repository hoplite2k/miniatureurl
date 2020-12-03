import { GET_URL_FAIL, GET_URL_REQUEST, GET_URL_SUCCESS } from '../constants/urlconstants';
import axios from 'axios';

export const geturl = (url) => async (dispatch) => {
    try {
        dispatch({ type: GET_URL_REQUEST });

        const { data } = await axios.post('/url/shorten', url);
        dispatch({
            type: GET_URL_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: GET_URL_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response,
        });
    }
};