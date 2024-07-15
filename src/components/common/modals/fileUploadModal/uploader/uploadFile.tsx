import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useRef } from "react";
import styles from "../style.module.scss";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadDoneOutlinedIcon from "@mui/icons-material/FileDownloadDoneOutlined";
import { Button } from "@/utils/button/Button";
import { setActiveUiState } from "@/store/reducer/ui";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const UploadFile = ({ loadingState, editFormData }: any) => {
  const videoRef = useRef<any>(null);
  const handleUploadClick = () => {
    if (loadingState === "upload") {
      videoRef.current?.click();
    }
  };
  const dispatch = useDispatch();
  const handleChangeFile = async (event: any) => {
    const videodata = event.target.files[0];
    console.log("video", videodata);
    if (videodata?.type === "video/mp4") {
      dispatch(
        setActiveUiState({
          uiState: "uploaded",
          data: { ...editFormData, fileData: videodata },
        })
      );
    } else {
      toast.error("Invalid file type. Please upload a video file.");
    }
  };
  const uploadVideoHandler = () => {
    function updateUIState(state: string) {
      dispatch(
        setActiveUiState({
          uiState: state,
          data: editFormData,
        })
      );
    }
    if (loadingState === "uploaded") {
      updateUIState("loading");
      setTimeout(() => {
        updateUIState("complete");
      }, 4000);
    } else {
      if (loadingState === "complete") {
        updateUIState("create-project");
      }
    }
  };

  return (
    <Box className={styles.UploadBox}>
      <Box className={styles.DashboardDetailPanel} onClick={handleUploadClick}>
        {loadingState === "loading" ? (
          <Box sx={{ display: "flex" }}>
            <CircularProgress
              size={"lg"}
              sx={{ width: "80px", height: "80px", color: "#D2BEFF" }}
            />
          </Box>
        ) : loadingState === "complete" ? (
          <FileDownloadDoneOutlinedIcon
            sx={{
              width: "100px",
              height: "100px",
              color: "#D2BEFF",
            }}
          />
        ) : (
          <FileUploadOutlinedIcon
            sx={{
              width: "100px",
              height: "110px",
            }}
          />
        )}

        <input
          type="file"
          name="videofile"
          ref={videoRef}
          onChange={handleChangeFile}
          style={{ display: "none" }}
        />
        {loadingState === "loading" || loadingState === "uploaded" ? (
          <Typography
            variant="h3"
            fontWeight={500}
            fontSize={20}
            lineHeight={"24px"}
            color={"#D2BEFF"}
          >
            {editFormData?.fileData?.name || "File Name"}
          </Typography>
        ) : loadingState === "upload" ? (
          <Button variant="primary" autoFocus>
            Choose File
          </Button>
        ) : (
          ""
        )}
        <Typography
          variant="body1"
          fontSize={20}
          lineHeight={"24px"}
          color={"#D2BEFF"}
        >
          {loadingState === "loading"
            ? "loading"
            : loadingState === "complete"
            ? "Upload Complete"
            : loadingState === "upload"
            ? "or drag and drop"
            : ""}
        </Typography>
      </Box>

      <Button
        variant="primary"
        className={styles.UploadButton}
        onClick={uploadVideoHandler}
        autoFocus
      >
        {loadingState === "complete" ? "Next" : "Upload"}
      </Button>
    </Box>
  );
};

export default UploadFile;
