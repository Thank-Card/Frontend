import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

// api.interceptors.request.use((config) => {
//     const token = localStorage.getItem('jwtToken'); // 로컬 스토리지에서 토큰 가져오기
//     if (token) {
//         config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
// }, (error) => {
//     return Promise.reject(error);
// });

export default api;
