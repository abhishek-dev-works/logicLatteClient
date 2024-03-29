import React from "react";
import { makeStyles } from "tss-react/mui";
import Logo from "../../assets/images/logo.png";
import { Avatar, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";

const useStyles = makeStyles()({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "70px",
    color: "#fefefe",
    padding: "10px 0",
    backgroundColor: "#3e3fc4",
    position: "sticky",
    top: 0,
    zIndex: 12,
  },
  image: {
    height: "50px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  },
  textField: {
    margin: 10,
    backgroundColor: "#fefefe",
    borderRadius: 4,
    width: "40vw",
    "& .MuiOutlinedInput-input": {
      height: "0.4375em",
    },
  },
  logoName: {
    fontFamily: "montserrat",
    fontSize: "large",
    fontWeight: 600,
    fontStyle: "italic",
  },
  logoWrapper: {
    display: "flex",
  },
});
const Header = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.header}>
      <div className={classes.logoWrapper}>
        <img className={classes.image} src={Logo} alt="logic latte logo" />
        <p className={classes.logoName}>LogicLatte</p>
      </div>
      <TextField
        placeholder="Search"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        className={classes.textField}
      />
      <NotificationsIcon fontSize="large" />
      <Avatar sx={{ bgcolor: "#fefefe", color: "#000000" }}>AB</Avatar>
    </div>
  );
};

export default Header;
