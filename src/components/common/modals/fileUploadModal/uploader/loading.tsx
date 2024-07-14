import { Box, SelectChangeEvent } from "@mui/material";
import React from "react";
import styles from "../style.module.scss";

import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

import { Button } from "@/utils/button/Button";
const LoadingSubtitle = ({ createProjectHandler }: any) => {
  const [selectScreenSize, setSelectScreenSize] = React.useState("mobile");
  const [name, setName] = React.useState("");
  const [background, setBackground] = React.useState("");
  const [frameRate, setFrameRate] = React.useState("24fps");
  const [subtitleOpt, setsubtitleOpt] = React.useState("Generate-New");

  const handleChange = (event: SelectChangeEvent) => {
    setFrameRate(event.target.value as string);
  };
  return (
    <Box className={styles.AfterUploadMainContent}>
      <Box className={styles.AfterUpload}>
        <Box className={styles.LeftSideSetting}>
          <video
            src={"https://www.youtube.com/watch?v=RU9nD32AQbo"}
            controls
            style={{ width: "100%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default LoadingSubtitle;
