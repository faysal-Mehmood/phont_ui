"use client";
import * as React from "react";
import Button from "@/utils/button/Button";
import axios from "axios";
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
import { toast } from "react-toastify";

export default function ProjectOverviewModel({
  setOpenModel,
  openModel,
  setVideoData,
}) {
  const [openPopup, setOpenPopup] = React.useState(false);
  const [uploadFile, setUploadFile] = React.useState(true);
  const [openUploadModal, setOpenUploadModal] = React.useState(false);
  const [projectName, setProjectName] = React.useState("");
  const [loadingState, setloadingState] = React.useState("upload");
  const [seletecproject, setSelectedProject] = React.useState({});

  const [allProjects, setAllProjects] = React.useState([]);
  const handleClose = () => {
    setOpenModel(false);
  };

  const deleteProject = () => {
    console.log(seletecproject);
    setAllProjects(allProjects?.filter((f) => f._id !== seletecproject?._id));
    toast.success("Project has been delete successfully");
    setOpenPopup(false);
  };
  const createProject = async () => {
    try {
      const auth_token = localStorage.getItem("auth_token");
      const response = await axios.post(
        "http://20.218.120.21:8000/api/project",
        { name: projectName },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth_token}`,
          },
        }
      );
      if (response?.data?.success) {
        setUploadFile(false);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error?.response?.data?.message);
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

                <Button
                  variant="primary"
                  onClick={() => {
                    setOpenUploadModal(true);
                    setUploadFile(true);
                  }}
                >
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
                ! Welcome Back
              </Typography>
              <div className={styles.ProjectBoxWrapper}>
                {allProjects ? (
                  allProjects?.length ? (
                    allProjects?.map((item, index) => (
                      <div key={index} className={styles.ProjectDetailCard}>
                        <div
                          className={styles.ProjectBox}
                          onClick={() => {
                            setOpenUploadModal(true);
                            setloadingState("upload");
                            setUploadFile(false);
                          }}
                        ></div>
                        <div className={styles.ProjectDescriptionpanel}>
                          <Typography
                            fontSize={"12px"}
                            variant="body2"
                            fontWeight={400}
                            color={"#fff"}
                            marginBottom={"13px"}
                          >
                            {item.name}
                          </Typography>
                          <div>
                            <EditIcon sx={{ color: "#fff" }} />
                            <DeleteOutlineOutlinedIcon
                              onClick={() => {
                                setOpenPopup(true);
                                setSelectedProject(item);
                              }}
                              sx={{ color: "#fff", cursor: "pointer" }}
                            />
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
                    ))
                  ) : (
                    <div>No data found</div>
                  )
                ) : (
                  <div>loading....</div>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </React.Fragment>

      <DeletePopup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        deleteProject={deleteProject}
      />
      <FileUploadModal
        openModel={openUploadModal}
        setOpenModel={setOpenUploadModal}
        createProject={createProject}
        setProjectName={setProjectName}
        projectName={projectName}
        setuploadFile={setUploadFile}
        uploadFile={uploadFile}
        setVideoData={setVideoData}
        setOpenPorjectModel={setOpenModel}
        setloadingState={setloadingState}
        loadingState={loadingState}
      />
    </>
  );
}
