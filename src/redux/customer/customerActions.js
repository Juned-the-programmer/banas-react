import axios from 'axios';
import Notiflix from 'notiflix';

export const ADD_CUSTOMER_REQUEST = 'ADD_CUSTOMER_REQUEST';
export const ADD_CUSTOMER_SUCCESS = 'ADD_CUSTOMER_SUCCESS';
export const ADD_CUSTOMER_FAILURE = 'ADD_CUSTOMER_FAILURE';

export const GET_CUSTOMERS_REQUEST = 'GET_CUSTOMERS_REQUEST';
export const GET_CUSTOMERS_SUCCESS = 'GET_CUSTOMERS_SUCCESS';
export const GET_CUSTOMERS_FAILURE = 'GET_CUSTOMERS_FAILURE';

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

export const getcustomers = () => {
    return async (dispatch) => {
        try{
            dispatch({type: GET_CUSTOMERS_REQUEST});
            const dataUrl = `https://banas-api.herokuapp.com/api/list-customer/`;
            const response = await axios.get(dataUrl);
            dispatch({type: GET_CUSTOMERS_SUCCESS, payload: response.data});
        }catch(error){
            console.error(error);
            dispatch({type: GET_CUSTOMERS_FAILURE, payload: error});
        }
    }
};