import axios from "axios";
import API from "../api";

const API = axios.create({
  baseURL:   `${API}/api `,
});

// attach token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
