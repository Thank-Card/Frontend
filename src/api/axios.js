import axios from "axios";

export const getToken = localStorage.getItem("Token");

export const deleteToken = () => {
  if (localStorage.getItem !== null) {
    localStorage.removeItem("Token");
  }
};

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: getToken,
  },
});

export default api;
