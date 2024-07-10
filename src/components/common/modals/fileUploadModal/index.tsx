import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Box,
  Button,
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

import { uploadModule } from "./uploadModule.style";
import styles from "./style.module.scss";

interface UploadModuleProps {
  openModel: boolean;
  setOpenModel: React.Dispatch<React.SetStateAction<boolean>>;
}

const Index = ({ openModel, setOpenModel }: UploadModuleProps) => {
  const [uploadFile, setUploadFile] = useState(false);

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  useEffect(() => {
    setUploadFile(true);
  }, []);

  const handleClose = () => {
    setOpenModel(false);
  };
  return (
    <React.Fragment>
      <Dialog
        open={openModel}
        onClose={handleClose}
        sx={uploadModule({ uploadFile })}>
        <DialogContent className={styles.UploadDetailModel}>
          <Box marginTop={uploadFile ? "20px" : ""}>
            <Image
              src={"/images/Phont_Logo_Weiss.svg"}
              alt={"logo"}
              width={101}
              height={22}
            />
            <IconButton className={styles.BackArrowButton}>
              <ArrowBackOutlinedIcon />
            </IconButton>
          </Box>
          {uploadFile ? (
            <Box className={styles.AfterUpload}>
              <Box className={styles.LeftSideSetting}>
                <Box>
                  <Input
                    value={""}
                    placeholder='Project Name'
                    className={styles.NameInput}
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
                      <Typography variant='h6' color={"#FFFFFF"}>
                        Background
                      </Typography>
                      <Input
                        type='color'
                        value={""}
                        className={styles.ColorPicker}
                      />
                    </Box>

                    <Box className={styles.SettingAllSide}>
                      <CropFreeOutlinedIcon />
                      <Typography variant='h6' color={"#FFFFFF"}>
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
                        }}>
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
                      className={styles.SettingAllSide}>
                      <SubtitlesOutlinedIcon />
                      <Typography variant='h6' color={"#FFFFFF"}>
                        Subtitles:
                      </Typography>
                      <FormControl>
                        <RadioGroup
                          aria-labelledby='demo-radio-buttons-group-label'
                          defaultValue='Generate-New'
                          name='radio-buttons-group'>
                          <FormControlLabel
                            value='Generate-New'
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
                            label='Generate New'
                          />
                          <FormControlLabel
                            value='UseSRT'
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
                            label='Use SRT'
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
                  variant='outlined'
                  className={styles.GenerateButton}
                  onClick={handleClose}
                  endIcon={<ArrowForwardOutlinedIcon />}
                  autoFocus>
                  GENERATE
                </Button>
              </Box>
            </Box>
          ) : (
            <Box className={styles.UploadBox}>
              <Box className={styles.DashboardDetailPanel}>
                <FileUploadOutlinedIcon
                  sx={{
                    width: "100px",
                    height: "110px",
                  }}
                />
                <Button variant='outlined' onClick={handleClose} autoFocus>
                  Choose File
                </Button>
                <Typography
                  variant='body1'
                  fontSize={20}
                  lineHeight={"24px"}
                  color={"#D2BEFF"}>
                  or drag and drop{" "}
                </Typography>
              </Box>

              <Button
                variant='outlined'
                className={styles.UploadButton}
                onClick={handleClose}
                autoFocus>
                Upload
              </Button>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default Index;
