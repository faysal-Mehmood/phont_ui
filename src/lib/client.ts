import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

// Create a type for your Axios instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://20.218.120.21:8000/api",
  headers: {
    "Content-Type": "application/json",
    // Authorization header will be added dynamically
  },
});

// Add a request interceptor to include the access token in headers
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig): any => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      // Ensure headers object exists before modifying it
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
