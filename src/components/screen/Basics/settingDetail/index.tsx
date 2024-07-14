import { Box, Input, Typography } from "@mui/material";
import React from "react";
import FormatItalicOutlinedIcon from "@mui/icons-material/FormatItalicOutlined";
import FormatColorTextOutlinedIcon from "@mui/icons-material/FormatColorTextOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import TextFieldsOutlinedIcon from "@mui/icons-material/TextFieldsOutlined";
import OpacityOutlinedIcon from "@mui/icons-material/OpacityOutlined";
import FeaturedVideoOutlinedIcon from "@mui/icons-material/FeaturedVideoOutlined";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import CustomizedSwitches from "@/utils/switch/Switch";
import { RangeSlider } from "@/utils/rangeSlider/RangeSlider";
import { FormSelect } from "@/utils/formSelect/FormSelect";
import FormatShapesIcon from "@mui/icons-material/FormatShapes";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import styles from "../style.module.scss";
const SettingDetails = () => {
  return (
    <Box className={styles.FunctionPats}>
      <Box className={styles.FormatInput}>
        <FormatShapesIcon />
        <Input type="text" />
      </Box>

      <Box className={styles.GtsSlide}>
        <Typography variant="body1" fontSize={20} lineHeight={"24px"}>
          GTS:
        </Typography>
        <Typography
          variant="h4"
          fontSize={22}
          lineHeight={"24px"}
          fontWeight={600}
        >
          1
        </Typography>
        <RangeSlider value={1} />
        <StarBorderOutlinedIcon />
      </Box>

      <Box className={styles.CheckBoxes}>
        <CustomizedSwitches label="Typography" />
        <CustomizedSwitches label="Animation" />
        <CustomizedSwitches label="Colour" />
        <Box className={styles.SwitchBox}>
          <CustomizedSwitches label="Dynamic" />
          <RangeSlider value={1} className={styles.SliderWidth} />
        </Box>
        <CustomizedSwitches label="Emojis" />

        <Box className={styles.SwitchBox}>
          <CustomizedSwitches label=" Karaoke" />
          <RangeSlider value={1} className={styles.SliderWidth} />
        </Box>
      </Box>

      <Box marginTop={"69px"}>
        <FormSelect
          label="Background"
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
          label="Font"
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
  );
};

export default SettingDetails;
