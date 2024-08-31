import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import profilepicMale from "../../assets/images/profilepic.jpg";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
  card: {
    margin: 10,
    "& .MuiPaper-root": {
      margin: 0,
    },
    "& .MuiCard-root": {
      margin: 0,
    },
  },
});

interface IFriendsCardProps {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  profilePic: string;
  mutualFriends: number;
  cardActions?: boolean;
}
const FriendsCard = ({
  id,
  name,
  email,
  phone,
  location,
  mutualFriends,
  cardActions,
}: IFriendsCardProps) => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/users/${id}`);
  };

  const handleAddFriend = (e: React.MouseEvent) => {
    // Add friend logic here
    e.stopPropagation();
    console.log("Add friend clicked");
  };
  return (
    <Box onClick={handleClick} role="link">
      <Card
        sx={{ width: 200, height: 265, margin: 10 }}
        className={classes.card}
      >
        <div
          style={{
            backgroundImage: `url(${profilepicMale})`,
            width: "100%",
            height: 150,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <CardContent>
          <Typography fontWeight={450}>{name}</Typography>
          <Typography variant="subtitle1">
            {mutualFriends} Mutual Friends
          </Typography>
          {!cardActions && <Typography>{location}</Typography>}
          {cardActions && (
            <CardActions>
              <Button size="small" variant="contained" style={{margin: '0 auto'}} onClick={handleAddFriend}>Add Friend</Button>
            </CardActions>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default FriendsCard;
