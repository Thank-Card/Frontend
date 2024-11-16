import axios from "axios";

const getToken = localStorage.getItem("Token");

console.log(getToken);

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: getToken,
  },
});

export default api;
