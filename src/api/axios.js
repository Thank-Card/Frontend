import axios from "axios";

const getToken = localStorage.getItem('Token');

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        Authorization: getToken,
    },
});




export default api;
