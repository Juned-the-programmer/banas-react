import axios from "axios";

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const loginUser = (user, history) => {
    return async (dispatch) => {
        try{
            dispatch({type: LOGIN_USER_REQUEST});
            const dataUrl = ``;
            const response = await axios.post(dataUrl, user);
            dispatch({type: LOGIN_USER_SUCCESS, payload: response.data});
            // alert
            history.push('/');
        }catch(error) {
            console.error(error);
            dispatch({type: LOGIN_USER_FAILURE, payload: error});
        }
    }
};