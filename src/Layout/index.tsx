import { Box } from "@mui/material";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}


const Layout = ({children}: LayoutProps) => {
  return (
      <Box sx={{
          backgroundColor: "#10141f",
          display: "flex",
          flexDirection: {
              xs: "column",
              lg: "row"
          },
          color: "white",
          padding: 3,
          gap: 3,
          overflowY: "hidden",
          height: "100vh"
      }}></Box>
  )
}

export default Layout