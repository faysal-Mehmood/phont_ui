"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

import styles from "./style.module.scss";
import { deletePopup } from "./deletePopup.style";

const Index = ({ openPopup, setOpenPopup, deleteProject }) => {
  const handleClose = () => {
    setOpenPopup(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={openPopup}
        onClose={handleClose}
        sx={deletePopup}
        className={styles.DeletePopup}
      >
        <DialogTitle className={styles.Heading}>
          {"Delete this project?"}
        </DialogTitle>
        <DialogActions className={styles.ButtonsBox}>
          <Button
            variant="outlined"
            startIcon={<CloseIcon />}
            onClick={handleClose}
          >
            No
          </Button>
          <Button
            variant="outlined"
            startIcon={<CheckIcon />}
            onClick={deleteProject}
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default Index;
