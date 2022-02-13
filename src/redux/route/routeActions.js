import axios from 'axios';
import Notiflix from 'notiflix';

export const GET_ROUTES_REQUEST = 'GET_ROUTES_REQUEST';
export const GET_ROUTES_SUCCESS = 'GET_ROUTES_SUCCESS';
export const GET_ROUTES_FAILURE = 'GET_ROUTES_FAILURE';

export const ADD_ROUTE_REQUEST = 'ADD_ROUTE_REQUEST';
export const ADD_ROUTE_SUCCESS = 'ADD_ROUTE_SUCCESS';
export const ADD_ROUTE_FAILURE = 'ADD_ROUTE_FAILURE';


export const getRoutes = () => {
    return async (dispatch) => {
        try{
            dispatch({type: GET_ROUTES_REQUEST});
            const dataUrl = `https://banas-api.herokuapp.com/api/list-route/`;
            const response = await axios.get(dataUrl);
            dispatch({type: GET_ROUTES_SUCCESS, payload: response.data});
        }catch(error){
            console.error(error);
            dispatch({type: GET_ROUTES_FAILURE, payload: error});
        }
    }
};

export const addRoute = (data) => {
    return async (dispatch) => {
        try{
            dispatch({type: ADD_ROUTE_REQUEST});
            const dataUrl = `https://banas-api.herokuapp.com/api/add-route/`;
            const response = await axios.post(dataUrl, data);
            dispatch({type: ADD_ROUTE_SUCCESS, payload: response.data});
            Notiflix.Notify.success('Add Route Successfully.');
        }catch(error){
            console.error(error);
            dispatch({type: ADD_ROUTE_FAILURE, payload: error});
        }
    }
};