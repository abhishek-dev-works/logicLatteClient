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
  },
  {
    icon: <MessageIcon />,
    displayText: "Messages",
  },
  {
    icon: <PeopleAltIcon />,
    displayText: "Friends",
  },
  {
    icon: <WorkIcon />,
    displayText: "Jobs",
  },
];
const useStyles = makeStyles()({
  menuItem: {
    display: "flex",
    margin: 20,
    marginLeft: 14
  },
  icon: {
    marginRight: 15,
  },
  sidebar: {
    width: 54,
    height: "calc(100vh - 90px)",
    color: 'black',
    backgroundColor: '#fefefe',
    transition: "width 3.5s ease",
    overflow: "hidden",
    "&:hover": {
      width: "auto",
      transition: "width 3.5s ease",
    },
  },
});

const MenuItem = ({
  icon,
  displayText,
  onClick,
}: {
  icon: React.ReactNode;
  displayText: string;
  onClick?: (p: any) => any;
}) => {
  const { classes } = useStyles();
  return (
    <div className={classes.menuItem}>
      <div className={classes.icon}>{icon}</div>
      <Typography fontSize="medium" color="#000000">
        {displayText}
      </Typography>
    </div>
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
