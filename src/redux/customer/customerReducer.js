import * as customerActions from './customerActions';

export const customerFeatureKey = 'customerInfo';

const initialState = {
    loading: false,
    customers: [],
    errMessage: "",
};

export const reducer = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case customerActions.ADD_CUSTOMER_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case customerActions.ADD_CUSTOMER_SUCCESS:
            return {
                ...state,
                loading: false,
            }

        case customerActions.ADD_CUSTOMER_FAILURE:
            return {
                ...state,
                loading: false,
                errMessage: payload.message
            }
        //GET THE CUSTOMERS DATA
        case customerActions.GET_CUSTOMERS_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case customerActions.GET_CUSTOMERS_SUCCESS:
            return {
                ...state,
                loading: false,
                customers: payload
            }

        case customerActions.GET_CUSTOMERS_FAILURE:
            return {
                ...state,
                loading: false,
                customers: [],
                errMessage: payload.message
            }
            
        default: return state;
    };
};