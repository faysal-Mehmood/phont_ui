"use client";
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
import axios from "axios";
// import { getAllProjectDetails } from "@/store/action/project";

export default function ProjectOverviewModel({ setOpenModel, openModel }) {
  const [allProjects, setAllProjects] = React.useState([]);
  const handleClose = () => {
    setOpenModel(false);
  };
  const createProject = async () => {
    try {
      const auth_token = localStorage.getItem("auth_token");
      const response = await axios.post(
        "http://20.218.120.21:8000/api/project",
        { name: "project 123456" },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth_token}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const getAllProjectDetails = async () => {
    try {
      const auth_token = localStorage.getItem("auth_token");
      const response = await axios.get(
        "http://20.218.120.21:8000/api/project",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth_token}`,
          },
        }
      );
      if (response.data?.success) {
        setAllProjects(response?.data?.data);
      }

      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  React.useEffect(() => {
    if (openModel) {
      getAllProjectDetails();
    }
  }, [openModel]);

  return (
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
              <Button variant="primary">Create</Button>
            </div>
            <Box className={styles.ProfileSettingIcons}>
              <div onClick={createProject}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </div>
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
              {allProjects?.map((item, index) => (
                <div key={index} className={styles.ProjectDetailCard}>
                  <div className={styles.ProjectBox}></div>
                  <div className={styles.ProjectDescriptionpanel}>
                    <Typography
                      fontSize={"12px"}
                      variant="body2"
                      fontWeight={400}
                      color={"#fff"}
                      marginBottom={"13px"}
                    >
                      {item?.name}
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
