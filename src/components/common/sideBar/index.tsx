"use client";
import React, { useEffect } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { SideBarData } from "@/data/sidebar";

import styles from "./sidebar.module.scss";

const SideBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  // useEffect(() => {
  //   if (pathname === "/basics" && !localStorage.getItem("auth_token")) {
  //     router.push("/");
  //   }
  // }, [pathname]);
  // console.log("pathname", pathname);

  return (
    <Box
      className={styles.SidebarMainBox}
      display={pathname === "/" ? "none" : "block"}
    >
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
                <Typography variant="h6" fontWeight={400}>
                  {item.name}
                </Typography>
              </Link>
            ))}
          </Box>
        </Box>
        <Box className={styles.SideBarUserAbout}>
          <div
            onClick={() => {
              localStorage.setItem("aut_token", "");
              router.push("/");
            }}
          >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </div>
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
