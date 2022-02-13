import axios from 'axios';
import Notiflix from 'notiflix';

export const ADD_CUSTOMER_REQUEST = 'ADD_CUSTOMER_REQUEST';
export const ADD_CUSTOMER_SUCCESS = 'ADD_CUSTOMER_SUCCESS';
export const ADD_CUSTOMER_FAILURE = 'ADD_CUSTOMER_FAILURE';

export const addCutomer = (data) => {
    return async (dispatch) => {
        try{
            dispatch({type: ADD_CUSTOMER_REQUEST});
            const dataUrl = `https://banas-api.herokuapp.com/api/add-customer/`;
            const response = await axios.post(dataUrl, data);
            dispatch({type: ADD_CUSTOMER_SUCCESS, payload: response.data});
            Notiflix.Notify.success('Add Customer Successfully');
        }catch(error){
            console.error(error);
            dispatch({type: ADD_CUSTOMER_FAILURE, payload: error});
        }
    }
};