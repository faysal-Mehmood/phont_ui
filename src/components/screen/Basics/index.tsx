import React from "react";

import { Box, Button, IconButton, Typography } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

import styles from "./style.module.scss";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Index = () => {
  return (
    <Box className={styles.BasicContainer}>
      <Box className={styles.ControlArea}>
        <Box className={styles.ActionArea}>
          <IconButton className={styles.BackArrowButton}>
            <ArrowBackOutlinedIcon />
          </IconButton>
          <Button
            className={styles.InputButton}
            variant='outlined'
            endIcon={<VideocamOutlinedIcon />}>
            INPUT
          </Button>

          <InfoOutlinedIcon />
        </Box>
      </Box>

      <Box className={styles.ControlImageWithPlay}>
        <Box className={styles.CheckImageSetting}></Box>
        <Box className={styles.ImageDetail}>
          <Typography className={styles.ImageAbout}>Lorem Ipsum</Typography>
        </Box>
        <Box className={styles.ControlRangeSlider}></Box>
      </Box>
    </Box>
  );
};

export default Index;