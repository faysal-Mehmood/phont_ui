"use client";
import React, { useRef, useState } from "react";

import { Box, Button, IconButton, Input, Typography } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

import styles from "./style.module.scss";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ProjectOverviewModel from "../../common/modals/projectOverviewModel";
import FormatShapesIcon from "@mui/icons-material/FormatShapes";
import VideoPlayer from "./videoPlayer";
import axios from "axios";

const Index = () => {
  const [openModel, setOpenModel] = React.useState(false);
  const [videoData, setVideoData] = useState(null);

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
            variant='outlined'
            endIcon={<VideocamOutlinedIcon />}>
            INPUT
          </Button>

          <InfoOutlinedIcon />
        </Box>

        <Box className={styles.FunctionPats}>
          <Box className={styles.FormatInput}>
            <FormatShapesIcon />
            <Input type='text' />
          </Box>
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
