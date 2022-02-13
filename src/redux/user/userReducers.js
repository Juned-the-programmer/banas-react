import * as userActions from './userActions';

export const userFeatureKey = 'userInfo';

const initialState = {
    loading: false,
    user: {},
    errMessage: ""
};


export const reducer = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case userActions.LOGIN_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        
        case userActions.LOGIN_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: payload.user
            }

        case userActions.LOGIN_USER_FAILURE:
            return {
                ...state,
                loading: false,
                user: {},
                errMessage: payload
            }

        default: return state;
    };
};