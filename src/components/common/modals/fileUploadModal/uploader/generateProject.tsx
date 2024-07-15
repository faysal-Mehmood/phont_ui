import {
  Box,
  FormControl,
  FormControlLabel,
  Input,
  Radio,
  RadioGroup,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React from "react";
import styles from "../style.module.scss";
import { FormSelect } from "@/utils/formSelect/FormSelect";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import AdUnitsOutlinedIcon from "@mui/icons-material/AdUnitsOutlined";
import AspectRatioOutlinedIcon from "@mui/icons-material/AspectRatioOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import CropFreeOutlinedIcon from "@mui/icons-material/CropFreeOutlined";
import SubtitlesOutlinedIcon from "@mui/icons-material/SubtitlesOutlined";
import { Button } from "@/utils/button/Button";
const GenerateProject = ({ createProjectHandler }: any) => {
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
          <Box>
            <Input
              value={name}
              placeholder="Project Name"
              className={styles.NameInput}
              onChange={(e: any) => setName(e.target.value)}
            />
            {!name && (
              <Typography
                variant="body2"
                sx={{
                  fontSize: "18px",
                  color: "red",
                  marginTop: "10px",
                }}
              >
                Required
              </Typography>
            )}
            <Box className={styles.ScreenSizes}>
              <DesktopWindowsOutlinedIcon
                onClick={() => setSelectScreenSize("desktop")}
                sx={{
                  cursor: "pointer",
                  color:
                    selectScreenSize === "desktop"
                      ? "#655095"
                      : ("#fff" as any),
                }}
              />
              <AdUnitsOutlinedIcon
                onClick={() => setSelectScreenSize("mobile")}
                sx={{
                  cursor: "pointer",
                  color:
                    selectScreenSize === "mobile" ? "#655095" : ("#fff" as any),
                }}
              />
              <AspectRatioOutlinedIcon
                onClick={() => setSelectScreenSize("dynamicRatio")}
                sx={{
                  cursor: "pointer",
                  color:
                    selectScreenSize === "dynamicRatio"
                      ? "#655095"
                      : ("#fff" as any),
                }}
              />

              {selectScreenSize === "dynamicRatio" && (
                <>
                  <Box className={styles.BoxRatio}>
                    <Typography variant="h1">W</Typography>
                    <Input type="number" />
                  </Box>
                  <Box className={styles.BoxRatio}>
                    <Typography variant="h1">H</Typography>
                    <Input type="number" />
                  </Box>
                </>
              )}
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
                  onChange={(e) => setBackground(e.target.value)}
                  value={background}
                  className={styles.ColorPicker}
                />
              </Box>
              <FormSelect
                label=" Framerate"
                icon={<CropFreeOutlinedIcon />}
                value={frameRate}
                onChange={handleChange}
                data={[
                  {
                    label: "24 fps",
                    value: "24fps",
                  },
                  {
                    label: "25 fps",
                    value: "25fps",
                  },
                  {
                    label: "30 fps",
                    value: "30fps",
                  },
                  {
                    label: "50 fps",
                    value: "50fps",
                  },
                ]}
              />

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
                    onChange={(e) => setsubtitleOpt(e.target.value)}
                    value={subtitleOpt}
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
          <Box
            width={selectScreenSize === "mobile" ? "207px" : "207px"}
            height={selectScreenSize === "mobile" ? "364px" : "207px"}
            bgcolor={"#CFBBFB"}
          />
        </Box>
      </Box>
      <Button
        variant="primary"
        sx={{
          marginTop: "28px",
          paddingY: "2px ",
          textTransform: "uppercase",
          height: "31px",
          paddingX: "12px",
        }}
        onClick={() => {
          if (name) {
            createProjectHandler({
              name,
              subtitleOpt,
              frameRate,
              background,
            });
          }
        }}
        endIcon={<ArrowForwardOutlinedIcon width={"15px"} height={"15px"} />}
        autoFocus
      >
        GENERATE
      </Button>
    </Box>
  );
};

export default GenerateProject;
