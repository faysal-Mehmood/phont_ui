import { toast } from "react-toastify";
import axiosInstance from "./client";

export const getRequest = async (url: string, params: any = {}) => {
  try {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error: any) {
    console.error("GET request error:", error);
    toast.error(error?.response?.data?.message);
    return error;
  }
};

export const postRequest = async (url: string, data: any) => {
  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error: any) {
    console.error("POST request error:", error);
    toast.error(error?.response?.data?.message);
    return error;
  }
};

export const putRequest = async (url: string, data: any) => {
  try {
    const response = await axiosInstance.put(url, data);
    return response.data;
  } catch (error: any) {
    console.error("PUT request error:", error);
    toast.error(error?.response?.data?.message);
    return error;
  }
};

export const deleteRequest = async (url: string) => {
  try {
    const response = await axiosInstance.delete(url);
    return response.data;
  } catch (error: any) {
    console.error("DELETE request error:", error);
    toast.error(error?.response?.data?.message);
    return error;
  }
};
