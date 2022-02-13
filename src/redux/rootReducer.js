import { combineReducers } from "redux";
import * as userReducers from './user/userReducers';

export const rootReducer = combineReducers({
    [userReducers.userFeatureKey]: userReducers.reducer
});