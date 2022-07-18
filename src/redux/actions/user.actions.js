import * as client from "../../utils/ClientApi";

export const GET_USER = "GET_USER";
export const GET_TOKEN = "GET_TOKEN";
export const INIT_STATE = "INIT_STATE";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export const UPDATE_BIO = "UPDATE_BIO";
export const FOLLOW_DEFUNT= "FOLLOW_DEFUNT";
export const UNFOLLOW_DEFUNT= "UNFOLLOW_DEFUNT";

export const getUser = () => {
  return (dispatch) => {
    return client
      .doGet(client.user)
      .then((res) => {
        console.log(res);
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getToken = (tokenIn) => {
  return (dispatch) => {
    dispatch({ type: GET_TOKEN, payload: tokenIn });
  };
};

export const initState = () => {
  return (dispatch) => {
    dispatch({ type: INIT_STATE, payload: {} });
  };
};

export const uploadPicture = (data) => {
  return (dispatch) => {
    return client
      .doPost(client.userImg, data)
      .then((res) => {
        console.log(res);
        return client
          .doGet(client.user)
          .then((res) => {
            dispatch({
              type: UPLOAD_PICTURE,
              payload: res.data.userCredentials,
            });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
};

export const updateBio = (data) => {
  return (dispatch) => {
    return client
      .doPost(client.userBio, data)
      .then((res) => {
        console.log(res);
        return client
          .doGet(client.user)
          .then((res) => {
            dispatch({ type: UPDATE_BIO, payload: res.data.userCredentials });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
};

export const followDefunt= (defuntId, data)=>{
    return (dispatch)=>{
        return client
          .doGet(`${client.defunt}/${defuntId}/follow`)
          .then((res)=>{
              dispatch({ type: FOLLOW_DEFUNT, payload: data})
          })
          .catch(err=> console.log(err))
    }
}

export const unfollowDefunt= (defuntId)=>{
    return (dispatch)=>{
        return client
          .doGet(`${client.defunt}/${defuntId}/unfollow`)
          .then((res)=>{
              const defunt={
                name: res.data.name,
                post_name: res.data.post_name ? res.data.post_name : '',
                last_name: res.data.last_name,
                profil_photo: res.data.profil_photo ? res.data.profil_photo : '',
                defunt_id: res.data.defunt_id
              }
              dispatch({ type: UNFOLLOW_DEFUNT, payload: defunt})
          })
          .catch(err=> console.log(err))
    }
}
