import React from "react";
import CommonWrapper from "../Components/Common/CommonWrapper";
import Header from "../Components/Header.tsx/Header";
import SideBarNavigation from "../Components/SideNavigation.tsx/SideBarNavigation";
import { Box } from "@mui/material";
import HomePage from "./HomePage";

const LandingPage = () => {
  return (
    <CommonWrapper>
      <Header />
      <Box sx={{ display: "flex" }}>
        <SideBarNavigation />
        <HomePage />
      </Box>
    </CommonWrapper>
  );
};

export default LandingPage;
