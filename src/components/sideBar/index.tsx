"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

import SideBarData from "../../../public/data/sidebar.json";

const SideBar = () => {
  return (
    <Box
      height={"calc(100vh - 90px)"}
      bgcolor='#000000'
      position={"fixed"}
      top={0}
      left={0}
      padding={"40px 75px 52px 34px"}
      zIndex={5}>
      <Box
        width={"100%"}
        height={"100%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        gap={"24px"}>
        <Image
          src={SideBarData?.webLogo}
          alt={"logo"}
          width={101}
          height={22}
        />

        <Box
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          gap={"16px"}>
          {SideBarData?.links?.map((item, index) => (
            <Box
              key={index}
              width={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              gap={"16px"}
              padding={"9px 20px"}
              borderRadius={"24px"}
              sx={{
                "&:hover": {
                  backgroundColor: "#D2BEFF",
                  cursor: "pointer",
                  h6: {
                    color: "#000000",
                  },
                },
                "&:active": {
                  backgroundColor: "#444444",
                },
              }}>
              <Image src={item?.icon} alt={"logo"} width={20} height={16} />
              <Typography variant='h6' fontWeight={400} color={"#fff"}>
                {item.name}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}>
          <Box
            sx={{
              position: "relative",
              width: "55px",
              height: "55px",
              borderRadius: "50%",
            }}>
            <Image src={"/public/images/xd.jpg"} alt={"logo"} fill />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
