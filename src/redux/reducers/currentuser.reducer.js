// import { defunt } from "../../utils/ClientApi";
import {
  GET_DEFUNT,
  UPLOAD_IMG,
  GET_POSTS,
  ADD_POST,
  LIKE_POST,
  UNLIKE_POST,
  FOLLOW_DEFUNT2,
  UNFOLLOW_DEFUNT2,
  UPDATE_DEFUNT,
  DELETE_POST,
} from "../actions/currentuser.action";

const initialState = {};

export default function currentuserReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DEFUNT:
      return { ...state, ...action.payload };
    case UPLOAD_IMG:
      if (action.payload.profil_photo) {
        return {
          ...state,
          defunt: {
            ...state.defunt,
            profil_photo: action.payload.profil_photo,
            updated_at: action.payload.updated_at,
          },
        };
      } else {
        return {
          ...state,
          defunt: {
            ...state.defunt,
            cover_photo: action.payload.cover_photo,
            updated_at: action.payload.updated_at,
          },
        };
      }
    case GET_POSTS:
      return { ...state, ...action.payload };
    case ADD_POST: {
      const post = action.payload;
      post.likers = [];
      switch (post.type_post) {
        case 1:
          return { ...state, hommages: [post, ...state.hommages] };
        case 2:
          return {
            ...state,
            condoleances: [post, ...state.condoleances],
          };
        default:
          return { ...state, oraisons: [post, ...state.oraisons] };
      }
    }
    case LIKE_POST: {
      const post = action.payload;
      switch (post.type_post) {
        case 1: {
          return {
            ...state,
            hommages: posts(state.hommages, post),
          };
        }
        case 2: {
          return {
            ...state,
            condoleances: posts(state.condoleances, post),
          };
        }
        default: {
          return {
            ...state,
            oraisons: posts(state.oraisons, post),
          };
        }
      }
    }
    case UNLIKE_POST: {
      const post = action.payload;
      switch (post.type_post) {
        case 1: {
          return {
            ...state,
            hommages: posts(state.hommages, post),
          };
        }
        case 2: {
          return {
            ...state,
            condoleances: posts(state.condoleances, post),
          };
        }
        default: {
          return {
            ...state,
            oraisons: posts(state.oraisons, post),
          };
        }
      }
    }
    case FOLLOW_DEFUNT2: {
      return {
        ...state,
        followers: [action.payload, ...state.followers],
      };
    }
    case UNFOLLOW_DEFUNT2: {
      return {
        ...state,
        followers: state.followers.filter(
          (follower) => follower.defunt_id !== action.payload.defuntId
        ),
      };
    }
    case UPDATE_DEFUNT: {
      return {
        ...state,
        defunt: defuntState(state.defunt, action.payload),
      };
    }
    case DELETE_POST: {
      const post = action.payload;
      switch (post.type_post) {
        case 1:
          return {
            ...state,
            hommages: state.hommages.filter(
              (hommage) => hommage.post_id !== post.post_id
            ),
          };
        case 2:
          return {
            ...state,
            condoleances: state.condoleances.filter(
              (condoleance) => condoleance.post_id !== post.post_id
            ),
          };
        default:
          return {
            ...state,
            oraisons: state.oraisons.filter(
              (oraison) => oraison.post_id !== post.post_id
            ),
          };
      }
    }
    // case INIT_STATE:
    //   return initialState;
    default:
      return state;
  }
}

const defuntState = (object, objetEnter) => {
  let objectRes = object;
  if (objetEnter.name) objectRes.name = objetEnter.name;
  if (objetEnter.post_name) objectRes.post_name = objetEnter.post_name;
  if (objetEnter.last_name) objectRes.last_name = objetEnter.last_name;
  if (objetEnter.sexe) objectRes.sexe = objetEnter.sexe;
  if (objetEnter.birth_date) objectRes.birth_date = objetEnter.birth_date;
  if (objetEnter.birth_place) objectRes.birth_place = objetEnter.birth_place;
  if (objetEnter.death_date) objectRes.death_date = objetEnter.death_date;
  if (objetEnter.death_place) objectRes.death_date = objetEnter.death_place;
  if (objetEnter.death_cause) objectRes.death_cause = objetEnter.death_cause;
  if (objetEnter.burial_place) objectRes.burial_place = objetEnter.burial_place;
  if (objetEnter.updated_at) objectRes.updated_at = objetEnter.updated_at;
  return objectRes;
};

// const posts = (list, eltEnter) => {
//   let listPost = [];
//   list.forEach((elt) => {
//     if (elt.post_id === eltEnter.post_id) {
//       listPost.push(eltEnter);
//     } else {
//       listPost.push(elt);
//     }
//   });
//   return listPost;
// };

const posts = (list, eltEnter) => {
  let listPost = [];
  list.forEach((elt) => {
    if (elt.post_id === eltEnter.post_id) {
      listPost.push(eltEnter);
    } else {
      listPost.push(elt);
    }
  });
  return listPost;
};
