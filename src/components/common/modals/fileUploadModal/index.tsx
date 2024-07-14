import React from "react";
import Image from "next/image";
import { Box, Dialog, DialogContent, IconButton } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

import { uploadModule } from "./uploadModule.style";
import styles from "./style.module.scss";
import GenerateProject from "./uploader/generateProject";
import UploadFile from "./uploader/uploadFile";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setActiveUiState, setOpenFormReducer } from "@/store/reducer/ui";
import {
  createprojectDetailAction,
  // uploadprojectVideoAction,
} from "@/store/action/project";
import axios from "axios";
import { addprojectReducer } from "@/store/reducer/project";
import { toast } from "react-toastify";
import LoadingSubtitle from "./uploader/loading";

interface UploadModuleProps {
  setOpenProjectModel: (value: boolean) => void;
}

const Index = ({ setOpenProjectModel }: UploadModuleProps) => {
  const ui = useSelector((state: RootState) => state.ui);
  const dispatch = useDispatch();
  const isModelOpen = ui?.openForm;
  const uploadvideoGeenratSubtitle = async (res: any, data: object) => {
    try {
      const formData = new FormData();
      formData.append("video", ui?.editData?.fileData);
      const auth_token = localStorage.getItem("auth_token");
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/project/upload-video/${res?.data?._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${auth_token}`,
          },
        }
      );
      console.log(response);
      if (response.data.success) {
        dispatch(addprojectReducer(data));
        dispatch(setOpenFormReducer(false));
        setOpenProjectModel(true);
        toast.success(response?.data?.message);
      }
    } catch (error: any) {
      toast.error(
        "Response Error:",
        error.response?.data?.message || error?.message
      );
    }
  };
  const generateVideoSubtitle = async (data: any) => {
    const res = await createprojectDetailAction(data);
    if (res.success) {
      dispatch(
        setActiveUiState({ uiState: "generate-subtitle", data: ui?.editData })
      );
      setTimeout(() => {
        uploadvideoGeenratSubtitle(res, data);
      }, 4000);
    }
  };

  const handleClose = () => {
    dispatch(setOpenFormReducer(false));
  };
  return (
    <React.Fragment>
      <Dialog
        open={ui?.openForm}
        onClose={handleClose}
        sx={uploadModule({ isModelOpen })}
      >
        <DialogContent className={styles.UploadDetailModel}>
          <Box marginTop={isModelOpen ? "20px" : ""}>
            <Image
              src={"/images/Phont_Logo_Weiss.svg"}
              alt={"logo"}
              width={101}
              height={22}
            />
            <IconButton
              className={styles.BackArrowButton}
              onClick={() => {
                dispatch(setOpenFormReducer(false));
                setOpenProjectModel(true);
              }}
            >
              <ArrowBackOutlinedIcon />
            </IconButton>
          </Box>
          {ui.uiState &&
          ["upload", "uploaded", "loading", "complete"]?.includes(
            ui.uiState
          ) ? (
            <UploadFile loadingState={ui.uiState} editFormData={ui?.editData} />
          ) : ui.uiState === "create-project" ? (
            <GenerateProject createProjectHandler={generateVideoSubtitle} />
          ) : (
            <LoadingSubtitle />
          )}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default Index;
