import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  FormControl,
  FormControlLabel,
  IconButton,
  Input,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import AdUnitsOutlinedIcon from "@mui/icons-material/AdUnitsOutlined";
import AspectRatioOutlinedIcon from "@mui/icons-material/AspectRatioOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import CropFreeOutlinedIcon from "@mui/icons-material/CropFreeOutlined";
import SubtitlesOutlinedIcon from "@mui/icons-material/SubtitlesOutlined";
import FileDownloadDoneOutlinedIcon from "@mui/icons-material/FileDownloadDoneOutlined";

import { uploadModule } from "./uploadModule.style";
import styles from "./style.module.scss";
import axios from "axios";

interface UploadModuleProps {
  openModel: boolean;
  setOpenModel: React.Dispatch<React.SetStateAction<boolean>>;
  createProject: any;
  setProjectName: (value: string) => void;
  projectName: string;
  uploadFile: boolean;
  setUploadFile: (value: boolean) => void;
  setVideoData: (value: any) => void;
  setOpenPorjectModel: (value: boolean) => void;
  loadingState: string;
  setloadingState: (value: string) => void;
}

const Index = ({
  openModel,
  setOpenModel,
  createProject,
  setProjectName,
  projectName,
  setUploadFile,
  uploadFile,
  setVideoData,
  setOpenPorjectModel,
  setloadingState,
  loadingState,
}: UploadModuleProps) => {
  const videoRef = useRef<any>(null);
  const [age, setAge] = React.useState("");

  const [fileData, setfileData] = React.useState<any>("");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const uploadVideo = async () => {
    if (fileData?.type === "video/mp4") {
      const formData = new FormData();
      formData.append("video", fileData);
      setloadingState("loading");
      try {
        const auth_token = localStorage.getItem("auth_token");
        const response = await axios.post(
          "http://20.218.120.21:8000/api/project/upload-video/668ee4fff68ad06cda578550",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data", // Changed to multipart/form-data
              Authorization: `Bearer ${auth_token}`,
            },
          }
        );
        console.log(response.data);
        if (response.data.success) {
          setloadingState("complete");
          setVideoData(response.data?.data);
        }
      } catch (error: any) {
        console.error("Response Error:", error.response.data);
      }
    }
  };
  const handleUploadVideo = () => {
    videoRef.current?.click();
  };
  const handleVideoUpload = async (event: any) => {
    console.log("eve", event.target.files[0]);
    const videodata = event.target.files[0];
    if (videodata?.type === "video/mp4") {
      setfileData(videodata);
      setloadingState("uploaded");
    } else {
      console.error("Invalid file type. Please upload a video file.");
    }
  };

  const handleClose = () => {
    setOpenModel(false);
  };
  return (
    <React.Fragment>
      <Dialog
        open={openModel}
        onClose={handleClose}
        sx={uploadModule({ uploadFile })}
      >
        <DialogContent className={styles.UploadDetailModel}>
          <Box marginTop={uploadFile ? "20px" : ""}>
            <Image
              src={"/images/Phont_Logo_Weiss.svg"}
              alt={"logo"}
              width={101}
              height={22}
            />
            <IconButton
              className={styles.BackArrowButton}
              onClick={() => {
                setOpenModel(false);
                setloadingState("upload");
              }}
            >
              <ArrowBackOutlinedIcon />
            </IconButton>
          </Box>
          {uploadFile ? (
            <Box className={styles.AfterUpload}>
              <Box className={styles.LeftSideSetting}>
                <Box>
                  <Input
                    value={projectName}
                    placeholder="Project Name"
                    className={styles.NameInput}
                    onChange={(e: any) => setProjectName(e.target.value)}
                  />

                  <Box className={styles.ScreenSizes}>
                    <DesktopWindowsOutlinedIcon />
                    <AdUnitsOutlinedIcon />
                    <AspectRatioOutlinedIcon />
                  </Box>
                </Box>
                <Box>
                  <Box className={styles.HandelPart}>
                    <Box className={styles.SettingAllSide}>
                      <PaletteOutlinedIcon />
                      <Typography variant="h6" color={"#FFFFFF"}>
                        Background
                      </Typography>
                      <Input
                        type="color"
                        value={""}
                        className={styles.ColorPicker}
                      />
                    </Box>

                    <Box className={styles.SettingAllSide}>
                      <CropFreeOutlinedIcon />
                      <Typography variant="h6" color={"#FFFFFF"}>
                        Framerate
                      </Typography>
                      <Select
                        className={styles.Select}
                        value={age}
                        onChange={handleChange}
                        sx={{
                          "& .MuiSelect-select": {
                            padding: "4px 12px",
                            color: "#FFFFFF",
                            fontSize: "20px",
                            lineHeight: "24px",
                          },

                          "& .MuiSvgIcon-root": {
                            color: "#FFFFFF",
                          },
                        }}
                      >
                        <MenuItem value={24}>24 fps</MenuItem>
                        <MenuItem value={25}>25 fps</MenuItem>
                        <MenuItem value={30}>30 fps</MenuItem>
                        <MenuItem value={60}>60 fps</MenuItem>
                      </Select>
                    </Box>
                    <Box
                      sx={{
                        alignItems: "flex-start !important",
                      }}
                      className={styles.SettingAllSide}
                    >
                      <SubtitlesOutlinedIcon />
                      <Typography variant="h6" color={"#FFFFFF"}>
                        Subtitles:
                      </Typography>
                      <FormControl>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="Generate-New"
                          name="radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Generate-New"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "20px",
                                lineHeight: "24px",
                              },
                            }}
                            control={
                              <Radio
                                sx={{
                                  color: "#FFFFFF",
                                  "&.Mui-checked": {
                                    color: "#FFFFFF",
                                  },
                                }}
                              />
                            }
                            label="Generate New"
                          />
                          <FormControlLabel
                            value="UseSRT"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "20px",
                                lineHeight: "24px",
                              },
                            }}
                            control={
                              <Radio
                                sx={{
                                  color: "#FFFFFF",
                                  "&.Mui-checked": {
                                    color: "#FFFFFF",
                                  },
                                }}
                              />
                            }
                            label="Use SRT"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.RightSideSetting}>
                <Box width={"207px"} height={"364px"} bgcolor={"#CFBBFB"}></Box>
                <Button
                  variant="outlined"
                  className={styles.GenerateButton}
                  onClick={createProject}
                  endIcon={<ArrowForwardOutlinedIcon />}
                  autoFocus
                >
                  GENERATE
                </Button>
              </Box>
            </Box>
          ) : (
            <Box className={styles.UploadBox}>
              <Box
                className={styles.DashboardDetailPanel}
                onClick={handleUploadVideo}
              >
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
                  onChange={handleVideoUpload}
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
                    {fileData?.name}
                  </Typography>
                ) : loadingState === "upload" ? (
                  <Button variant="outlined" autoFocus>
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
                    ? "Loading..."
                    : loadingState === "complete"
                    ? "Upload Complete"
                    : loadingState === "upload"
                    ? "or drag and drop"
                    : ""}
                </Typography>
              </Box>

              <Button
                variant="outlined"
                className={styles.UploadButton}
                onClick={() => {
                  if (loadingState === "uploaded") {
                    uploadVideo();
                  } else {
                    handleClose();
                    setOpenPorjectModel(false);
                  }
                }}
                autoFocus
              >
                {loadingState === "complete" ? "Next" : "Upload"}
              </Button>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default Index;
