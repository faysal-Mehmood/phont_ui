"use client";
import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SideBarData } from "@/data/sidebar";

import styles from "./sidebar.module.scss";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <Box
      className={styles.SidebarMainBox}
      display={pathname === "/" ? "none" : "block"}>
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
              <Link href={item.url} key={index} className={styles.MenuItem}>
                {item.icon}
                <Typography variant='h6' fontWeight={400}>
                  {item.name}
                </Typography>
              </Link>
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
