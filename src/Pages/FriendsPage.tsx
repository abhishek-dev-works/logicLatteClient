import React from "react";
import { makeStyles } from "tss-react/mui";
import friendsData from "../mocks/friends.json";
import FriendsCard from "../Components/Common/FriendsCard";
import { Typography } from "@mui/material";

const useStyles = makeStyles()({
  wrapper: {
    margin: "20px",
    paddingBottom: 10,
    height: "calc(100vh - 140px)",
    overflowY: "scroll",
    width: "80em",
  },
  flex: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: "x-large",
    fontWeight: 600,
  },
  addFriend: {
    backgroundColor: "#fefefe",
    borderRadius: "0.6em",
    padding: "20px",
    margin: "0 auto",
  },
  addFriendWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "nowrap",
    overflow: "hidden",
    overflowX: "scroll",
  },
});
const FriendsPage = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.flex}>
        {friendsData.map((friend) => (
          <div key={friend.id}>
            <FriendsCard
              id={friend.id}
              name={friend.name}
              email={friend.email}
              phone={friend.phone}
              location={friend.location}
              profilePic={friend.profilePic}
              mutualFriends={friend.mutualFriends}
            />
          </div>
        ))}
      </div>
      <div className={classes.addFriend}>
        <Typography variant="h5">People You May Know</Typography>
        <div className={classes.addFriendWrapper}>
          {friendsData.map((friend) => (
            <div key={friend.id}>
              <FriendsCard
                id={friend.id}
                name={friend.name}
                email={friend.email}
                phone={friend.phone}
                location={friend.location}
                profilePic={friend.profilePic}
                mutualFriends={friend.mutualFriends}
                cardActions
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendsPage;
