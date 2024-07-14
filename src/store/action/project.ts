// import { dispatch } from "../store";
import { useAppDispatch } from "../hooks";
import { postRequest, getRequest, deleteRequest } from "@/lib/request";
import {
  addprojectReducer,
  deleteprojectReducer,
  setAllprojectsReducer,
} from "../reducer/project";
import store from "../store";
import { toast } from "react-toastify";
// import { setContractDetailsReducer } from "../reducer/user"; // Remove .ts extension here

export const getAllProjectDetaiLsAction = async () => {
  const result = await getRequest("/project");
  if (result.success) {
    store.dispatch(setAllprojectsReducer(result.data));
    return result;
  }
};
export const createprojectDetailAction = async (data: any) => {
  const result = await postRequest(`/project`, data);
  if (result.success) {
    return result;
  }
};
export const uploadprojectVideoAction = async (id: string, data: any) => {
  const result = await postRequest(`/project/upload-video/${id}`, data);
  if (result.success) {
    store.dispatch(addprojectReducer(result.data));
    return result;
  }
};
export const deleteProjectAction = async (projectId: any) => {
  const result = await deleteRequest(`/project/${projectId}`);
  if (result.success) {
    store.dispatch(deleteprojectReducer(projectId));
    toast.success(result?.message);
    return result;
  }
};
