import * as client from "../../utils/ClientApi";

export const GET_DEFUNT = "GET_DEFUNT";
export const UPLOAD_IMG = "UPLOAD_IMG";
export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";
export const LIKE_POST= "LIKE_POST";
export const UNLIKE_POST= "UNLIKE_POST";
export const DELETE_POST= "DELETE_POST";
export const COMMENT_POST= "COMMENT_POST";
export const FOLLOW_DEFUNT2= "FOLLOW_DEFUNT";
export const UNFOLLOW_DEFUNT2= "UNFOLLOW_DEFUNT";
export const UPDATE_DEFUNT= "UPDATE_DEFUNT";

export const getDefunt = (defuntId) => {
  return (dispatch) => {
    return client
      .doGet(`${client.defunt}/${defuntId}`)
      .then((res) => {
        console.log(res);
        dispatch({ type: GET_DEFUNT, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const uploadImg = (type, defuntId, data) => {
  const path =
    type === "profil"
      ? `${client.defunt}/${defuntId}/profil`
      : `${client.defunt}/${defuntId}/cover`;
  return (dispatch) => {
    return client
      .doPost(path, data)
      .then((res) => {
        console.log(res);
        dispatch({ type: UPLOAD_IMG, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const getPosts = (defuntId) => {
  return (dispatch) => {
    return client
      .doGet(`${client.postsByDefunt}/${defuntId}`)
      .then((res) => {
        dispatch({ type: GET_POSTS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const addPost = (defuntId, data) => {
  return (dispatch) => {
    return client
      .doPost(`${client.posts}/${defuntId}`, data)
      .then((res) => {
        dispatch({ type: ADD_POST, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const likePost = (postId, userId, type) =>{
  return (dispatch) => {
    return client
        .doGet(`${client.posts}/${postId}/like`)
        .then(res =>{
          dispatch({ type: LIKE_POST, payload: res.data })
        })
        .catch((err)=> console.log(err))
  }
}

export const unlikePost = (postId, userId, type) =>{
  return (dispatch) => {
    return client
        .doGet(`${client.posts}/${postId}/unlike`)
        .then(res =>{
          dispatch({ type: UNLIKE_POST, payload: res.data })
        })
        .catch((err)=> console.log(err))
  }
}


export const deletePost = (data) =>{
  return (dispatch) => {
    return client
        .doDelete(`${client.posts}/${data.post_id}`)
        .then(res =>{
          dispatch({ type: DELETE_POST, payload: data })
        })
        .catch((err)=> console.log(err))
  }
}


export const commentPost= (postId, data)=>{
  return (dispatch)=>{
    return client
       .doPost(`${client.posts}/${postId}/comment`, data)
       .then(res=>{
         dispatch({ type: COMMENT_POST, payload: res.data })
       })
       .catch((err)=> console.log(err))
  }
}

export const followDefunt2 = (defuntId)=>{
  return (dispatch)=>{
    return client
       .doGet(`${client.follower}/${defuntId}`)
       .then(res=>{
         dispatch({ type: FOLLOW_DEFUNT2, payload: res.data })
       })
       .catch((err)=> console.log(err))
          
  }
}

export const unfollowDefunt2 = (defuntId)=>{
  return (dispatch)=>{
       dispatch({type: UNFOLLOW_DEFUNT2, payload: {defuntId: defuntId}})          
  }
}

export const updateDefunt= (defuntId, data)=>{
  return (dispatch)=>{
    return client
        .doPost(`${client.defunt}/${defuntId}`, data)
        .then(res=>{
          dispatch({ type: UPDATE_DEFUNT, payload: data })
        })
  }
}