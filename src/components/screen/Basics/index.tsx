"use client";
import React, { useState } from "react";

import { Box, Button, IconButton, Typography } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ProjectOverviewModel from "../../common/modals/projectOverviewModel";
import VideoPlayer from "./videoPlayer";

import styles from "./style.module.scss";

const Index = () => {
  const [openModel, setOpenModel] = React.useState(false);
  const [videoData, setVideoData] = useState<any>(null);

  return (
    <Box className={styles.BasicContainer}>
      <Box className={styles.ControlArea}>
        <Box className={styles.ActionArea}>
          <IconButton className={styles.BackArrowButton}>
            <ArrowBackOutlinedIcon />
          </IconButton>

          <Button
            onClick={() => setOpenModel(true)}
            className={styles.InputButton}
            variant="outlined"
            endIcon={<VideocamOutlinedIcon />}
          >
            INPUT
          </Button>

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
      <ProjectOverviewModel
        setOpenModel={setOpenModel}
        openModel={openModel}
        setVideoData={setVideoData}
      />
    </Box>
  );
};

export default Index;
