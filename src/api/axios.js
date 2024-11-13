import axios from "axios";

//api 기본 설정
const api = axios.create({
    baseURL: process.env.Spring_API_URL
});

export default api;