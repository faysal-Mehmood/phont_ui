import React from "react";
import Image from "next/image";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

import { uploadModule } from "./uploadModule.style";
import styles from "./style.module.scss";

interface UploadModuleProps {
  openModel: boolean;
  setOpenModel: React.Dispatch<React.SetStateAction<boolean>>;
}

const Index = ({ openModel, setOpenModel }: UploadModuleProps) => {
  const handleClose = () => {
    setOpenModel(false);
  };
  return (
    <React.Fragment>
      <Dialog open={openModel} onClose={handleClose} sx={uploadModule}>
        <DialogContent className={styles.UploadDetailModel}>
          <Box className={styles.LeftUploadPanel}>
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
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default Index;
