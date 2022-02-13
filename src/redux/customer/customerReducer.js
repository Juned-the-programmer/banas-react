import * as customerActions from './customerActions';

export const customerFeatureKey = 'customerInfo';

const initialState = {
    loading: false,
    errMessage: ""
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

        default: return state;
    };
};