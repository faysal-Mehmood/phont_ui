import SubtitlesOutlinedIcon from "@mui/icons-material/SubtitlesOutlined";
import FormatShapesOutlinedIcon from "@mui/icons-material/FormatShapesOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import MoodOutlinedIcon from "@mui/icons-material/MoodOutlined";
import GraphicEqOutlinedIcon from "@mui/icons-material/GraphicEqOutlined";
import MusicNoteRoundedIcon from "@mui/icons-material/MusicNoteRounded";
import RecordVoiceOverOutlinedIcon from "@mui/icons-material/RecordVoiceOverOutlined";
import HearingDisabledOutlinedIcon from "@mui/icons-material/HearingDisabledOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MonitorIcon from '@mui/icons-material/Monitor';
import AodTwoToneIcon from '@mui/icons-material/AodTwoTone';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';


export const SideBarData = {
  webLogo: "/images/Phont_Logo_Weiss.svg",
  links: [
    {
      name: "Basics",
      url: "/basics",
      icon: <SubtitlesOutlinedIcon />,
    },
    {
      name: "Transcription",
      url: "/",
      icon: <FormatShapesOutlinedIcon />,
    },
    {
      name: "Translation",
      url: "/",
      icon: <TranslateOutlinedIcon />,
    },
    {
      name: "Speaker",
      url: "/",
      icon: <BadgeOutlinedIcon />,
    },
    {
      name: "Phonetics",
      url: "/",
      icon: <PublicOutlinedIcon />,
    },
    {
      name: "Emotion",
      url: "/",
      icon: <MoodOutlinedIcon />,
    },
    {
      name: "Noise",
      url: "/",
      icon: <GraphicEqOutlinedIcon />,
    },
    {
      name: "Music",
      url: "/",
      icon: <MusicNoteRoundedIcon />,
    },
    {
      name: "Video",
      url: "/",
      icon: <RecordVoiceOverOutlinedIcon />,
    },
    {
      name: "Accessibility",
      url: "/",
      icon: <HearingDisabledOutlinedIcon />,
    },
  ],
  userAbout: [
    {
      url: "/",
      icon: <ShoppingBagOutlinedIcon />,
    },
    {
      url: "/",
      icon: <HelpOutlineOutlinedIcon />,
    },
    {
      url: "/",
      icon: <SettingsOutlinedIcon />,
    },
  ],
  displayScreens: [
    {
      url: "/",
      icon: <MonitorIcon />,
    },
    {
      url: "/",
      icon: <AodTwoToneIcon />,
    },
    {
      url: "/",
      icon: <AspectRatioIcon />,
    },
  ],
};
