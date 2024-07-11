import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://20.218.120.21:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
  // Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
});

// Add a request interceptor to include the access token in headers
axiosInstance.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer `;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
