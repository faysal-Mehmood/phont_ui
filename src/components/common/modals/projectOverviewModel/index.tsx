"use client";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import DialogContent from "@mui/material/DialogContent";
import styles from "./projectOverviewModel.module.scss";
import Image from "next/image";
import { Avatar, Box, Typography } from "@mui/material";
import { SideBarData } from "@/data/sidebar";
import Link from "next/link";
import DeletePopup from "../deletePopup";
import FileUploadModal from "../fileUploadModal";
import { Button } from "@/utils/button/Button";
import { deleteProjectAction } from "@/store/action/project";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setActiveUiState, setOpenFormReducer } from "@/store/reducer/ui";

export default function ProjectOverviewModel({ setOpenModel, openModel }: any) {
  const [openPopup, setOpenPopup] = React.useState(false);

  const [seletecproject, setSelectedProject] = React.useState<any>({});
  const { projects } = useSelector((state: RootState) => state.project);

  const dispatch = useDispatch();
  // all functions
  const handleClose = () => {
    setOpenModel(false);
  };

  const deleteProject = async () => {
    const res = await deleteProjectAction(seletecproject?._id);
    if (res.success) {
      setOpenPopup(false);
    }
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
                    dispatch(setOpenFormReducer(true));
                    dispatch(setActiveUiState({ uiState: "upload", data: {} }));
                    setOpenModel(false);
                  }}
                  sx={{
                    width: "150px",
                    marginTop: "57px",
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
                {projects ? (
                  projects?.length ? (
                    projects?.map((item: any, index: number) => (
                      <div key={index} className={styles.ProjectDetailCard}>
                        <div
                          className={styles.ProjectBox}
                          onClick={() => {
                            // setOpenUploadModal(true);
                            // setloadingState("upload");
                            // setUploadFile(false);
                          }}
                        ></div>
                        <div className={styles.ProjectDescriptionpanel}>
                          <Typography
                            fontSize={"12px"}
                            variant="body2"
                            fontWeight={400}
                            color={"#fff"}
                          >
                            {item.name}
                          </Typography>
                          <div>
                            <EditIcon
                              width={"18px"}
                              height={"18px"}
                              sx={{ color: "#fff" }}
                            />
                            <DeleteOutlineOutlinedIcon
                              width={"16px"}
                              height={"18px"}
                              onClick={() => {
                                setOpenPopup(true);
                                setSelectedProject(item);
                              }}
                              sx={{
                                color: "#fff",
                                cursor: "pointer",
                                marginLeft: "10px",
                              }}
                            />
                          </div>
                        </div>

                        <Typography
                          fontSize={"12px"}
                          variant="body2"
                          fontWeight={400}
                          color={"#fff"}
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
      <FileUploadModal setOpenProjectModel={setOpenModel} />
    </>
  );
}
