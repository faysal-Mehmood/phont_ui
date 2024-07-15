"use client";
import { Inter } from "next/font/google";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    accent?: {
      main: string;
    };
  }
}

const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000", // Black
    },
    secondary: {
      main: "#D2BEFF", // Lilac
    },
    background: {
      default: "#FFFFFF", // White
      paper: "#30293A", // Grey
    },
    text: {
      primary: "#000000", // Black
      secondary: "#655095", // Purple
    },
    accent: {
      main: "#8264C8", // Another Purple
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: {
      fontWeight: 400,
      fontSize: "20px",
    },
    h2: {
      fontWeight: 500,
      fontSize: "20px",
      textTransform: "uppercase",
    },
    h3: {
      fontWeight: 700,
      fontSize: "20px",
    },
    body1: {
      fontWeight: 400,
      fontSize: "12px",
    },
  },
});

export default theme;
