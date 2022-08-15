import * as client from "../../utils/ClientApi";

export const GET_DEFUNTS = "GET_DEFUNTS";

export const getDefunts = () => {
  return (dispatch) => {
    return client
      .doGet(client.defunt, false)
      .then((res) => {
        console.log(res.data)
        dispatch({ type: GET_DEFUNTS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
