import { dispatch } from "../store";
import { postRequest, getRequest } from "../../lib/request";
import { setContractDetailsReducer } from "../reducer/user";
export const loginAction = async (data) => {
  const result = await postRequest("/auth/login", data);
  console.log("result", result);
};

export const signupAction = async (data) => {
  const result = await postRequest(`/auth/signup`, data);
  return result;
};
