import * as React from "react";
import { Button } from "@/utils/button/Button";
import Dialog from "@mui/material/Dialog";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import DialogContent from "@mui/material/DialogContent";
import styles from "./fileDetailsModel.module.scss";
import Image from "next/image";
import {
  Avatar,
  Box,
  Card,
  colors,
  Input,
  Slider,
  Typography,
} from "@mui/material";
import { SideBarData } from "@/data/sidebar";
import Link from "next/link";
import { Theme, useTheme } from "@mui/material/styles";
import HighQualityIcon from "@mui/icons-material/HighQuality";

export default function FileDetailsModel() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const rangeChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleClickOpen}>
        Open File Details Model
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "div",
          style: {
            backgroundColor: "#000000",
            minHeight: "700px",
            maxWidth: "1200px",
            width: "1200px",
          },
        }}
      >
        <DialogContent className={styles.FileDetailsModel}>
          <div className={styles.LeftProfilePanel}>
            <div className={styles.ArrowCirclelogo}>
              <Image
                src={"/images/Phont_Logo_Weiss.svg"}
                alt={"logo"}
                width={101}
                height={22}
              />
              <Link href="/">
                <ArrowCircleLeftOutlinedIcon
                  sx={{ color: "#fff", fontSize: 50 }}
                />
              </Link>
            </div>
          </div>
          <div className={styles.FileDetailsWrapper}>
            <div className={styles.FileDetail}>
              <div className={styles.DashboardDetailPanel}>
                <Input
                  type="text"
                  className={styles.CustomTextBox}
                  placeholder="New File Name"
                />
                <div className={styles.FileSettingWrapper}>
                  <div className={styles.ScreenSetting}>
                    <Box className={styles.ScreenSettingIcons}>
                      {SideBarData?.displayScreens?.map((item, index) => (
                        <Link key={index} href={item.url}>
                          {item.icon}
                        </Link>
                      ))}
                    </Box>
                    <Typography
                      fontSize={"20px"}
                      variant="body2"
                      fontWeight={400}
                      color={"#fff"}
                    >
                      W
                    </Typography>
                    <Input
                      type="text"
                      placeholder="1080"
                      className={styles.ScreenSettingInput}
                    />

                    <Typography
                      fontSize={"20px"}
                      variant="body2"
                      fontWeight={400}
                      color={"#fff"}
                    >
                      H
                    </Typography>
                    <Input
                      type="text"
                      className={styles.ScreenSettingInput}
                      placeholder="1920"
                    />
                  </div>
                  <div className={styles.FileDetails}>
                    <div className={styles.FormatDetails}>
                      <InsertDriveFileOutlinedIcon />
                      <Typography
                        fontSize={"20px"}
                        variant="body2"
                        fontWeight={400}
                        color={"#fff"}
                        width={100}
                      >
                        Format
                      </Typography>
                      <div className={styles.dropdown}>
                        <select className={styles.dropdownSelect}>
                          <option value="" disabled selected hidden>
                            H.264
                          </option>
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          <option value="option3">Option 3</option>
                        </select>
                      </div>
                    </div>
                    <div className={styles.WeightDetails}>
                      <WorkOutlineOutlinedIcon />
                      <Typography
                        fontSize={"20px"}
                        variant="body2"
                        fontWeight={400}
                        color={"#fff"}
                        width={120}
                      >
                        Weight
                      </Typography>
                      <Box sx={{ width: 190 }}>
                        <Slider
                          aria-label="Temperature"
                          defaultValue={50}
                          valueLabelDisplay="auto"
                          shiftStep={10}
                          step={10}
                          marks
                          min={10}
                          max={50}
                        />
                      </Box>
                      <HighQualityIcon />
                    </div>
                    <div className={styles.TimeFrameDetails}>
                      <TimerOutlinedIcon />
                      <Typography
                        fontSize={"20px"}
                        variant="body2"
                        fontWeight={400}
                        color={"#fff"}
                        width={150}
                      >
                        Time Frame
                      </Typography>
                      <div className={styles.Timer}>
                        <div className={styles.TimeFrames}>
                          <Typography
                            fontSize={"12px"}
                            variant="body2"
                            fontWeight={400}
                            color={"#fff"}
                            width={20}
                          >
                            Start
                          </Typography>
                          <Input type="text" placeholder="0:00:05:00" />
                        </div>
                        <div className={styles.TimeFrames}>
                          <Typography
                            fontSize={"12px"}
                            variant="body2"
                            fontWeight={400}
                            color={"#fff"}
                            width={20}
                          >
                            End
                          </Typography>
                          <Input type="text" placeholder="0:00:50:00" />
                        </div>
                        <div className={styles.TimeFrames}>
                          <Typography
                            fontSize={"12px"}
                            variant="body2"
                            fontWeight={400}
                            color={"#fff"}
                            width={20}
                          >
                            Length
                          </Typography>
                          <Input type="text" placeholder="0:00:45:00" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.FileDetailCard}>
                <div className={styles.FileBox}></div>
              </div>
            </div>
            <div className={styles.RangeSlider}>
              <Box sx={{ width: 800 }}>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  onChange={rangeChange}
                  valueLabelDisplay="auto"
                />
              </Box>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
