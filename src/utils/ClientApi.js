import axios from "axios";

export const endPoint = process.env.REACT_APP_API_URL;
export const login = endPoint + "/login";
export const signUp = endPoint + "/signup";
export const user = endPoint + "/user";
export const signOut = endPoint + "/signout";
export const userImg = endPoint + "/user/image";
export const userBio = endPoint + "/user/bio";
export const defunt = endPoint + "/defunts";
export const postsByDefunt = endPoint + "/post-defunt";
export const posts = endPoint + "/posts";
export const follower = endPoint + "/follower";

const userData = JSON.parse(
  localStorage.getItem("persist:deuil-pour-tous-redux")
);
console.log(userData);
const token = JSON.parse(userData.userReducer).token
  ? JSON.parse(userData.userReducer).token
  : null;
//const token= null;

export const doGet = (urlRequest, isProtected = true) => {
  let headersRequest;
  if (isProtected) {
    headersRequest = {
      Authorization: `Bearer ${token}`,
    };
    return axios({
      method: "GET",
      url: urlRequest,
      headers: headersRequest,
    });
  }
  return axios({
    method: "GET",
    url: urlRequest,
  });
};

export const doPost = (urlRequest, data, isProtected = true) => {
  let headersRequest;
  if (isProtected) {
    headersRequest = {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    };
    return axios({
      method: "POST",
      data: data,
      url: urlRequest,
      headers: headersRequest,
    });
  }
  headersRequest = {
    "Access-Control-Allow-Origin": "*",
  };
  return axios({
    method: "POST",
    data: data,
    url: urlRequest,
    headers: headersRequest,
  });
};

export const doDelete = (urlRequest, isProtected = true) => {
  let headersRequest;
  if (isProtected) {
    headersRequest = {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    };
    return axios({
      method: "DELETE",
      url: urlRequest,
      headers: headersRequest,
    });
  }
  headersRequest = {
    "Access-Control-Allow-Origin": "*",
  };
  return axios({
    method: "DELETE",
    url: urlRequest,
    headers: headersRequest,
  });
};
