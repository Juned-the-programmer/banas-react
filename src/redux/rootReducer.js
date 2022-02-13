import { combineReducers } from "redux";
import * as userReducers from './user/userReducers';
import * as customerReducers from './customer/customerReducer';
import * as routeReducers from './route/routeReducers';

export const rootReducer = combineReducers({
    [userReducers.userFeatureKey]: userReducers.reducer,
    [routeReducers.routeFeatureKey]: routeReducers.reducer,
    [customerReducers.customerFeatureKey]: customerReducers.reducer
});