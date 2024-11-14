import axios from "axios";

// api 기본 설정
const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

export default api;