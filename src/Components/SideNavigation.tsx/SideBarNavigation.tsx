import { Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";
import WindowIcon from "@mui/icons-material/Window";
import MessageIcon from "@mui/icons-material/Message";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WorkIcon from "@mui/icons-material/Work";

const Items = [
  {
    icon: <WindowIcon />,
    displayText: "Feeds",
    link: "/",
  },
  {
    icon: <MessageIcon />,
    displayText: "Messages",
  },
  {
    icon: <PeopleAltIcon />,
    displayText: "Friends",
    link: "/friends",
  },
  {
    icon: <WorkIcon />,
    displayText: "Jobs",
    link: "/jobs",
  },
];
const useStyles = makeStyles()({
  menuItem: {
    display: "flex",
    margin: 20,
    marginLeft: 14,
    textDecoration: "none",
    color: "black",
    cursor: "pointer",
  },
  icon: {
    marginRight: "1.5rem",
  },
  sidebar: {
    width: 54,
    height: "calc(100vh - 90px)",
    color: "black",
    backgroundColor: "#fefefe",
    maxWidth: "min-content",
    transition: "all 0.5s ease-in-out",
    overflow: "hidden",
    "&:hover": {
      transition: "all 0.5s ease-in-out",
      flexGrow: 1,
      maxWidth: "min-content",
    },
  },
});

const MenuItem = ({
  icon,
  displayText,
  onClick,
  link,
}: {
  icon: React.ReactNode;
  displayText: string;
  onClick?: (p: any) => any;
  link?: string;
}) => {
  const { classes } = useStyles();
  return (
    <a className={classes.menuItem} href={link}>
      <div className={classes.icon}>{icon}</div>
      <Typography fontSize="medium" color="#000000">
        {displayText}
      </Typography>
    </a>
  );
};
const SideBarNavigation = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.sidebar}>
      <div>
        {Items.map((item, index) => (
          <MenuItem {...item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SideBarNavigation;
