import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import LoginForm from "./Login/LoginForm";
import SignUp from "./Sign Up/SignUp";
import { makeStyles } from "tss-react/mui";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const useStyles = makeStyles()({
  indicator: {
    height: 6,
    borderRadius: 3,
    backgroundColor: "#fefefe",
    bottom: 1,
  },
  tabs: {
    width: '940px',
    margin: '0 auto',
    "& .MuiTabs-flexContainer": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#3A0CA3",
    },
  },
  tab: {
    color: "#d6d6d6",
    padding: 10,
    margin: "0 5px",
    '&.Mui-selected': {
      color: '#fefefe',
    },
  },
  selected: {
    color: "#d6d6d6",
    '& .Mui-selected': {
      color: '#fefefe',
    },
  },
  tabpanel: {
    width: '900px',
    padding: 20,
    margin: '0 auto',
    backgroundImage: 'linear-gradient(123deg, #F72541, #3F37A1)',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    display: 'flex',
    height: 600,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
});

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  const { classes } = useStyles();
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box className={classes.tabpanel}>{children}</Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const { classes } = useStyles();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          classes={{
            indicator: classes.indicator,
          }}
          className={classes.tabs}
        >
          <Tab
            label="Login"
            {...a11yProps(0)}
            disableRipple
            className={classes.tab}
            classes={{ selected: classes.selected }}
          />
          <Tab
            label="SignUp"
            {...a11yProps(1)}
            disableRipple
            className={classes.tab}
            classes={{ selected: classes.selected }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <LoginForm />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <SignUp />
      </CustomTabPanel>
    </Box>
  );
}
