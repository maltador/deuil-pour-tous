import { GET_OTHER_USER } from "../actions/otheruser.action";

const initialState = {};

export default function otheruserReducer(state = initialState, action) {
    switch (action.type) {
        case GET_OTHER_USER:{
           return {
               ...state, ...action.payload
           } 
        }
        default:
            return state;
    }
}