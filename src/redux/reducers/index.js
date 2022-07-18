import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import currentuserReducer from './currentuser.reducer';

export default combineReducers({
    userReducer, currentuserReducer
});