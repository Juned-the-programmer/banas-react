import * as routeActions from './routeActions';

export const routeFeatureKey = 'routeInfo';

const initialState = {
    loading: false,
    route: [],
    errMessage: ""
};

export const reducer = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case routeActions.GET_ROUTES_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case routeActions.GET_ROUTES_SUCCESS:
            return {
                ...state,
                loading: false,
                route: payload
            }

        case routeActions.GET_ROUTES_FAILURE:
            return {
                ...state,
                loading: false,
                route: [],
                errMessage: payload.message
            }

        case routeActions.ADD_ROUTE_REQUEST:
                return {
                    ...state,
                    loading: true,
                }
    
        case routeActions.ADD_ROUTE_SUCCESS:
                return {
                    ...state,
                    loading: false
                }
    
        case routeActions.ADD_ROUTE_FAILURE:
                return {
                    ...state,
                    loading: false,
                    errMessage: payload.message
                }

        default: return state;
    };
};