"use client";
import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import { SideBarData } from "@/dats/sidebar";

import styles from "./sidebar.module.scss";

const SideBar = () => {
  return (
    <Box className={styles.SidebarMainBox}>
      <Box className={styles.SidebarBox}>
        <Box>
          <Image
            src={SideBarData?.webLogo}
            alt={"logo"}
            width={101}
            height={22}
            className={styles.WebLogo}
          />

          <Box className={styles.SideBarMenu}>
            {SideBarData?.links?.map((item, index) => (
              <Box key={index} className={styles.MenuItem}>
                {item.icon}
                <Typography variant='h6' fontWeight={400} color={"#fff"}>
                  {item.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Box className={styles.SideBarUserAbout}>
          <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
          {SideBarData?.userAbout?.map((item, index) => (
            <Link key={index} href={item.url}>
              {item.icon}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
