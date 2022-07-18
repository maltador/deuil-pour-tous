import {
  GET_USER,
  GET_TOKEN,
  INIT_STATE,
  UPLOAD_PICTURE,
  UPDATE_BIO,
  FOLLOW_DEFUNT,
  UNFOLLOW_DEFUNT
} from "../actions/user.actions";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return { ...state, ...action.payload };
    case GET_TOKEN:
      return { ...state, ...action.payload };
    case INIT_STATE:
      return initialState;
    case UPLOAD_PICTURE:
      return {
        ...state,
        userCredentials: action.payload,
      };
    case UPDATE_BIO:
      return {
        ...state,
        userCredentials: action.payload,
      };
    case FOLLOW_DEFUNT:
      const res= action.payload;
      if(res.name){
        return {
          ...state,
          followings: [action.payload, ...state.followings]
        }
      }
      else{
        return state;
      }
      
    case UNFOLLOW_DEFUNT:
      return {
        ...state,
        followings: state.followings.filter((defunt)=> defunt.defunt_id !==  action.payload.defunt_id)
      }
    default:  
      return state;
  }
}


