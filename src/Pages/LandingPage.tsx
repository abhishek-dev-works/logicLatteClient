import CommonWrapper from "../Components/Common/CommonWrapper";
import Header from "../Components/Header.tsx/Header";
import SideBarNavigation from "../Components/SideNavigation.tsx/SideBarNavigation";
import { Box } from "@mui/material";

const LandingPage = ({ children }: { children: any }) => {
  return (
    <CommonWrapper>
      <Header />
      <Box sx={{ display: "flex", overflow: "hidden" }} overflow="hidden">
        <SideBarNavigation />
        {/* <div
          style={{
            width: "fit-content",
            height: "calc(100vh - 100px)",
            overflow: "scroll",
          }}
        > */}
          {children}
        {/* </div> */}
      </Box>
    </CommonWrapper>
  );
};

export default LandingPage;
