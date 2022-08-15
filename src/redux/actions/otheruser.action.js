import * as client from "../../utils/ClientApi";

export const GET_OTHER_USER= "GET_OTHER_USER";

export const getOtherUser=(userId)=>{
    return (dispatch) =>{
        return client
           .doGet(`${client.user}/${userId}`)
           .then((res)=>{
               console.log(res.data)
               dispatch({ type: GET_OTHER_USER, payload: res.data });
           })
           .catch((err) => {
            console.log(err);
          });
    }
}

