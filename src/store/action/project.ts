// import { dispatch } from "../store";
import { useAppDispatch } from "../hooks";
import { postRequest, getRequest } from "@/lib/request";
// import { setContractDetailsReducer } from "../reducer/user"; // Remove .ts extension here

export const getAllProjectDetails = async (data:any) => {
  const result = await postRequest("/project",data);
  console.log("result", result);
};

export const signupAction = async (data: any) => { // Replace 'any' with the appropriate type for 'data'
  const result = await postRequest(`/auth/signup`, data);
  return result;
};
