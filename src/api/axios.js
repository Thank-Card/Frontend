import axios from "axios";

// 최신 토큰을 가져오는 함수
export const getToken = () => localStorage.getItem("Token") || null;

// 토큰 삭제 함수
export const deleteToken = () => {
  if (localStorage.getItem("Token") !== null) {
    localStorage.removeItem("Token");
  }
};

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

// 요청마다 Authorization 헤더 설정
api.interceptors.request.use((config) => {
  const token = getToken(); // 최신 토큰 가져오기
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export default api;
