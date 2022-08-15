import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import currentuserReducer from './currentuser.reducer';
import otheruserReducer from './otheruser.reducer';
import defuntsReducer from './defunts.reducer';

export default combineReducers({
    userReducer, currentuserReducer, otheruserReducer, defuntsReducer
});