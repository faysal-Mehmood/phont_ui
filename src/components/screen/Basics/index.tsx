"use client";
import React, { useState } from "react";

import {
  Box,
  Button,
  IconButton,
  Input,
  Slider,
  Typography,
} from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ProjectOverviewModel from "../../common/modals/projectOverviewModel";
import FormatShapesIcon from "@mui/icons-material/FormatShapes";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import VideoPlayer from "./videoPlayer";
import axios from "axios";
import CustomizedSwitches from "@/utils/switch/Switch";
import { RangeSlider } from "@/utils/rangeSlider/RangeSlider";
import { FormSelect } from "@/utils/formSelect/FormSelect";
import FormatItalicOutlinedIcon from "@mui/icons-material/FormatItalicOutlined";
import FormatColorTextOutlinedIcon from "@mui/icons-material/FormatColorTextOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import TextFieldsOutlinedIcon from "@mui/icons-material/TextFieldsOutlined";
import OpacityOutlinedIcon from "@mui/icons-material/OpacityOutlined";
import FeaturedVideoOutlinedIcon from "@mui/icons-material/FeaturedVideoOutlined";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";

import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";

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

          <Box className={styles.GtsSlide}>
            <Typography variant='body1' fontSize={20} lineHeight={"24px"}>
              GTS:
            </Typography>
            <Typography
              variant='h4'
              fontSize={22}
              lineHeight={"24px"}
              fontWeight={600}>
              1
            </Typography>
            <RangeSlider value={1} />
            <StarBorderOutlinedIcon />
          </Box>

          <Box className={styles.CheckBoxes}>
            <CustomizedSwitches label='Typography' />
            <CustomizedSwitches label='Animation' />
            <CustomizedSwitches label='Colour' />
            <Box className={styles.SwitchBox}>
              <CustomizedSwitches label='Dynamic' />
              <RangeSlider value={1} className={styles.SliderWidth} />
            </Box>
            <CustomizedSwitches label='Emojis' />

            <Box className={styles.SwitchBox}>
              <CustomizedSwitches label=' Karaoke' />
              <RangeSlider value={1} className={styles.SliderWidth} />
            </Box>
          </Box>

          <Box marginTop={"69px"}>
            <FormSelect
              label='Background'
              value={""}
              onChange={() => {}}
              data={[
                {
                  label: "24 fps",
                  value: 24,
                },
                {
                  label: "25 fps",
                  value: 25,
                },
                {
                  label: "30 fps",
                  value: 30,
                },
                {
                  label: "50 fps",
                  value: 50,
                },
              ]}
            />
          </Box>

          <Box marginTop={"36px"}>
            <FormSelect
              label='Font'
              icon={<FormatItalicOutlinedIcon />}
              value={""}
              onChange={() => {}}
              data={[
                {
                  label: "24 fps",
                  value: 24,
                },
                {
                  label: "25 fps",
                  value: 25,
                },
                {
                  label: "30 fps",
                  value: 30,
                },
                {
                  label: "50 fps",
                  value: 50,
                },
              ]}
            />
          </Box>

          <Box className={styles.FormatDocumentsIcon}>
            <FormatColorTextOutlinedIcon />
            <BorderColorOutlinedIcon />
            <TextFieldsOutlinedIcon />
            <OpacityOutlinedIcon />
            <FeaturedVideoOutlinedIcon />
            <AddReactionOutlinedIcon />
            <ImageOutlinedIcon />
            <AirOutlinedIcon />
          </Box>
        </Box>

        {/* listing */}
        {/* <Box className={styles.ListingWrapperBox}>
          <Box className={styles.ListingBox}>
            <Box className={styles.ListItem}>
              <Box className={styles.ListDetailBox}>
                <Typography fontSize={20} lineHeight={"24px"}>
                  veni vidi vici
                </Typography>

                <Box className={styles.InOutDate}>
                  <Typography className={styles.Date}>In 2023-01-01</Typography>
                  <Typography className={styles.Date}>
                    Out 2023-01-01
                  </Typography>
                </Box>
              </Box>

              <DeleteForeverOutlinedIcon />
            </Box>

            <Box className={styles.AddListWrapper}>
              <Box className={styles.AddListButton}>
                <AddCircleOutlineOutlinedIcon />
                <Typography variant='h6'>In 2023-01-01</Typography>
              </Box>
            </Box>
          </Box>
          <Button
            onClick={() => {}}
            className={styles.SplitButton}
            variant='outlined'
            startIcon={<ContentCutOutlinedIcon />}>
            SPLIT
          </Button>
        </Box> */}
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
