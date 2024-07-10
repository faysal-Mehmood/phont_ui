import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { StoreProvider } from "@/store/StoreProvider";
import theme from "../theme";
import "react-toastify/dist/ReactToastify.css";
import "../assets/styles/index.scss";
import SideBar from "@/components/sideBar";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <SideBar />
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>{children} </ThemeProvider>
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </AppRouterCacheProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
