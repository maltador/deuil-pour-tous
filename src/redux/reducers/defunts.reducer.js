import { GET_DEFUNTS } from '../actions/defunts.action';

const initialState = {};

export default function defuntsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DEFUNTS:
      console.log(action.payload)
      return action.payload;  
    default:
      return state;
  }
}