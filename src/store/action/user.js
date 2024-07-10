import { getRequest, postRequest } from "@/src/lib/request";
import {
  Prcing,
  contractDetail,
  savingPlan,
  transactions,
} from "@/src/lib/schema";
import { dispatch } from "../store";
import { setContractDetailsReducer } from "../reducer/user";
export const login = async (data) => {
  const result = await postRequest("/login", data);
  console.log("result", result);
};

export const getSavingBalnaceAction = async (contractId) => {
  const result = await getRequest(`/saving-balances/${contractId}`);
  return savingPlan?.[0];
};
export const getPricingetailAction = async () => {
  const result = await getRequest(`/home/price`, {});
  return Prcing?.[0];
};

export const gettransactionDetails = async (contractId, startDate, endDate) => {
  let urlpath = `/spv1/${contractId}`;
  if (startDate && endDate) {
    urlpath = `/spv1/${contractId}?from=${startDate}&to=${endDate}`;
  }
  const result = await getRequest(urlpath);
  return transactions?.[0];
};

export const fetchContractDetailAction = async (contractId) => {
  const result = await getRequest(`/contracts/${contractId}`);
  dispatch(
    setContractDetailsReducer(contractDetail?.data?.contracts?.contract)
  );
};

export const fileUploadAction = async (data) => {
  const result = await postRequest(`/document/upload`, data);
  return result;
};

export const getAllUserFilesAction = async () => {
  const result = await getRequest(`/documents`);
  return result;
};
