"use client";
import React, { useRef, useState } from "react";

import { Box, Button, IconButton, Typography } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

import styles from "./style.module.scss";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ProjectOverviewModel from "../../common/modals/projectOverviewModel";
import VideoPlayer from "./videoPlayer";
import axios from "axios";

const Index = () => {
  const videoRef = useRef();
  const [openModel, setOpenModel] = React.useState(false);
  const [videoData, setVideoData] = useState(null);
  const uploadVideo = async (data) => {
    try {
      const auth_token = localStorage.getItem("auth_token");
      const response = await axios.post(
        "http://20.218.120.21:8000/api/project/upload-video/668ee4fff68ad06cda578550",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Changed to multipart/form-data
            Authorization: `Bearer ${auth_token}`,
          },
        }
      );
      console.log(response.data);
      if (response.data.success) {
        setVideoData(response.data?.data);
      }
    } catch (error) {
      console.error("Response Error:", error.response.data);
    }
  };

  const handleUploadVideo = () => {
    videoRef.current?.click();
  };

  const handleVideoUpload = async (event) => {
    console.log("eve", event.target.files[0]);
    const videodata = event.target.files[0];
    if (videodata?.type === "video/mp4") {
      const formData = new FormData();
      formData.append("video", videodata);
      console.log("videodata", videodata);
      await uploadVideo(formData);
    } else {
      console.error("Invalid file type. Please upload a video file.");
    }
  };

  return (
    <Box className={styles.BasicContainer}>
      <Box className={styles.ControlArea}>
        <Box className={styles.ActionArea}>
          <IconButton className={styles.BackArrowButton}>
            <ArrowBackOutlinedIcon />
          </IconButton>
          <Button
            onClick={handleUploadVideo}
            className={styles.InputButton}
            variant="outlined"
            endIcon={<VideocamOutlinedIcon />}
          >
            INPUT
          </Button>
          <Button
            onClick={() => setOpenModel(true)}
            className={styles.InputButton}
            variant="outlined"
            endIcon={<VideocamOutlinedIcon />}
          >
            Projects
          </Button>
          <input
            type="file"
            name="videofile"
            ref={videoRef}
            onChange={handleVideoUpload}
            style={{ display: "none" }}
          />
          <InfoOutlinedIcon />
        </Box>
      </Box>

      <Box className={styles.ControlImageWithPlay}>
        <Box className={styles.CheckImageSetting}>
          <VideoPlayer
            videoUrl={videoData?.videoUrl}
            subtitles={videoData?.subtitles}
          />
        </Box>
        <Box className={styles.ImageDetail}>
          <Typography className={styles.ImageAbout}>Lorem Ipsum</Typography>
        </Box>
        <Box className={styles.ControlRangeSlider}></Box>
      </Box>
      <ProjectOverviewModel setOpenModel={setOpenModel} openModel={openModel} />
    </Box>
  );
};

export default Index;
