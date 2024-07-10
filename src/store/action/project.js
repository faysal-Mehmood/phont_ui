import { dispatch } from "../store";
import { postRequest, getRequest } from "@/lib/request";
import { setContractDetailsReducer } from "../reducer/user";
export const getAllProjectDetails = async () => {
  const result = await postRequest("/project");
  console.log("result", result);
};

export const signupAction = async (data) => {
  const result = await postRequest(`/auth/signup`, data);
  return result;
};
