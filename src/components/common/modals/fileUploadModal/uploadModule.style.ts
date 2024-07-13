import React from "react";

export const uploadModule = ({ uploadFile }: any) => ({
  "& .MuiDialog-container": {
    background: `transparent url('img/PHONT_Project_Gallery.png') 0% 0% no-repeat padding-box`,
    opacity: 1,
  },

  "& .MuiPaper-root": {
    maxWidth: "1200px !important",
    minHeight: "700px",
    borderRadius: "20px",
    padding: uploadFile ? "25px 22px 25px 39px" : "44px 172px 40px 39px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "#000000 0% 0% no-repeat padding-box",
    opacity: 1,
    color: "#FFFFFF",
  },
});