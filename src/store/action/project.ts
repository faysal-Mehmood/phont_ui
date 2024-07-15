import {
  postRequest,
  getRequest,
  deleteRequest,
  patchRequest,
} from "@/lib/request";
import {
  addprojectReducer,
  deleteprojectReducer,
  setActiveProjectReducer,
  setAllprojectsReducer,
  updateProjectReducer,
} from "../reducer/project";
import store from "../store";
import { toast } from "react-toastify";

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

export const updateProjectAction = async (projectId: string, data: object) => {
  const result = await patchRequest(`/project/${projectId}`, data);
  if (result.success) {
    store.dispatch(updateProjectReducer(projectId));
    toast.success(result?.message);
    return result;
  }
};

export const generateSubtitleAction = async (projectId: string) => {
  const result = await getRequest(`/project/generate-subtitles/${projectId}`);
  return result;
};

export const getSingleProjectAction = async (id: string) => {
  const result = await getRequest(`/project${id}`);
  if (result.success) {
    store.dispatch(setActiveProjectReducer(result.data));
    return result;
  }
};
