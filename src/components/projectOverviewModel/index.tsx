import * as React from "react";
// import Button from "@mui/material/Button";
import Button from "@/utils/button/Button";
import Dialog from "@mui/material/Dialog";
import EditIcon from "@mui/icons-material/Edit";
import FormatShapesOutlinedIcon from "@mui/icons-material/FormatShapesOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import DialogContent from "@mui/material/DialogContent";
import styles from "./projectOverviewModel.module.scss";
import Image from "next/image";
import { Avatar, Box, Card, Typography } from "@mui/material";
import { SideBarData } from "@/dats/sidebar";
import Link from "next/link";

export default function ProjectOverviewModel() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleClickOpen}>
        Open form dialog
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
        <DialogContent className={styles.ProfileDetailModel}>
          <div className={styles.LeftProfilePanel}>
            <div className={styles.CreateButtonlogo}>
              <Image
                src={"/images/Phont_Logo_Weiss.svg"}
                alt={"logo"}
                width={101}
                height={22}
              />
              <Button variant="primary" onClick={handleClickOpen}>
                Create
              </Button>
            </div>
            <Box className={styles.ProfileSettingIcons}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              {SideBarData?.userAbout?.map((item, index) => (
                <Link key={index} href={item.url}>
                  {item.icon}
                </Link>
              ))}
            </Box>
          </div>
          <div className={styles.DashboardDetailPanel}>
            <Typography
              variant="subtitle1"
              fontWeight={400}
              color={"#fff"}
              marginBottom={"17px"}
            >
              !Welcome Back
            </Typography>
            <div className={styles.ProjectBoxWrapper}>
              {[0, 1, 2, 3]?.map((item) => (
                <div className={styles.ProjectDetailCard}>
                  <div className={styles.ProjectBox}></div>
                  <div className={styles.ProjectDescriptionpanel}>
                    <Typography
                      fontSize={"12px"}
                      variant="body2"
                      fontWeight={400}
                      color={"#fff"}
                      marginBottom={"13px"}
                    >
                      Project Name
                    </Typography>
                    <div>
                      <EditIcon sx={{ color: "#fff" }} />
                      <DeleteOutlineOutlinedIcon sx={{ color: "#fff" }} />
                    </div>
                  </div>

                  <Typography
                    fontSize={"12px"}
                    variant="body2"
                    fontWeight={400}
                    color={"#fff"}
                    marginBottom={"13px"}
                  >
                    Date
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
