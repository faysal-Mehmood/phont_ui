"use client";
import * as React from "react";
import Button from "@/utils/button/Button";
import Dialog from "@mui/material/Dialog";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import DialogContent from "@mui/material/DialogContent";
import styles from "./projectOverviewModel.module.scss";
import Image from "next/image";
import { Avatar, Box, Card, Typography } from "@mui/material";
import { SideBarData } from "@/dats/sidebar";
import Link from "next/link";
import DeletePopup from "../deletePopup";
import FileUploadModal from "../fileUploadModal";

export default function ProjectOverviewModel({ setOpenModel, openModel }) {
  const [openPopup, setOpenPopup] = React.useState(false);
  const [openUploadModal, setOpenUploadModal] = React.useState(false);

  const handleClose = () => {
    setOpenModel(false);
  };

  return (
    <>
      <React.Fragment>
        <Dialog
          open={openModel}
          onClose={handleClose}
          PaperProps={{
            component: "div",
            style: {
              backgroundColor: "#000000",
              minHeight: "700px",
              maxWidth: "1200px",
              width: "1200px",
            },
          }}>
          <DialogContent className={styles.ProfileDetailModel}>
            <div className={styles.LeftProfilePanel}>
              <div className={styles.CreateButtonlogo}>
                <Image
                  src={"/images/Phont_Logo_Weiss.svg"}
                  alt={"logo"}
                  width={101}
                  height={22}
                />
                <Button
                  variant='primary'
                  onClick={() => setOpenUploadModal(true)}>
                  Create
                </Button>
              </div>
              <Box className={styles.ProfileSettingIcons}>
                <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
                {SideBarData?.userAbout?.map((item, index) => (
                  <Link key={index} href={item.url}>
                    {item.icon}
                  </Link>
                ))}
              </Box>
            </div>
            <div className={styles.DashboardDetailPanel}>
              <Typography
                variant='subtitle1'
                fontWeight={400}
                color={"#fff"}
                marginBottom={"17px"}>
                !Welcome Back
              </Typography>
              <div className={styles.ProjectBoxWrapper}>
                {[0, 1, 2, 3]?.map((item, index) => (
                  <div key={index} className={styles.ProjectDetailCard}>
                    <div className={styles.ProjectBox}></div>
                    <div className={styles.ProjectDescriptionpanel}>
                      <Typography
                        fontSize={"12px"}
                        variant='body2'
                        fontWeight={400}
                        color={"#fff"}
                        marginBottom={"13px"}>
                        Project Name
                      </Typography>
                      <div>
                        <EditIcon sx={{ color: "#fff" }} />
                        <DeleteOutlineOutlinedIcon
                          onClick={() => setOpenPopup(true)}
                          sx={{ color: "#fff", cursor: "pointer" }}
                        />
                      </div>
                    </div>

                    <Typography
                      fontSize={"12px"}
                      variant='body2'
                      fontWeight={400}
                      color={"#fff"}
                      marginBottom={"13px"}>
                      Date
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </React.Fragment>

      <DeletePopup openPopup={openPopup} setOpenPopup={setOpenPopup} />
      <FileUploadModal
        openModel={openUploadModal}
        setOpenModel={setOpenUploadModal}
      />
    </>
  );
}
