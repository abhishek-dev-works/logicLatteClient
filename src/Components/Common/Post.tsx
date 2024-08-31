/* eslint-disable jsx-a11y/img-redundant-alt */
import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "./ShareIcon";
import { makeStyles } from "tss-react/mui";
import FavoriteIcon from "@mui/icons-material/Favorite";
export interface IPostProps {
  author_name?: string
  post_id: number;
  user_id: number;
  heading?: string;
  content?: string;
  image?: any;
  video?: any;
  created_at: Date;
  updated_at: Date;
}

const useStyles = makeStyles()({
  wrapper: {
    textAlign: "left",
    width: "60vw",
    backgroundColor: "#F8F9FA",
    border: "1px solid #DEE2E6",
    borderRadius: "1em",
    padding: "10px",
    margin: "20px",
    boxShadow: "2px 3px #ADB5BD",
  },
  heading: {
    fontSize: "normal",
  },
  imageWrapper: {
    textAlign: "center",
    width: "100%",
    margin: "10px 0",
  },
  image: {
    width: "50vw",
  },
  video: {
    width: "50vw",
  },
  content: {
    fontSize: "normal",
  },
  likeButton: {},
  likeIcon: {
    color: "red",
  },
  shareButton: {},
  shareIcon: {
    transform: "scaleX(-1)",
  },
});

const Post = (props: IPostProps) => {
  const { post_id, user_id, author_name , heading, content, image, video } = props;
  const { classes } = useStyles();
  return (
    <Box className={classes.wrapper}>
      {heading && (
        <Typography className={classes.heading}>{heading}</Typography>
      )}
      {image && (
        <Box className={classes.imageWrapper}>
          <img
            className={classes.image}
            src={image}
            alt={`post-image-${post_id}`}
          />{" "}
        </Box>
      )}
      {video && (
        <Box className={classes.imageWrapper}>
          {" "}
          <video
            className={classes.video}
            src={video}
            autoPlay={true}
            typeof="video/mp4"
            controls
          ></video>
        </Box>
      )}
      {content && (
        <Typography className={classes.content}>{content}</Typography>
      )}
      <IconButton>
        <FavoriteIcon className={classes.likeIcon} />
      </IconButton>
      <IconButton>
        <ShareIcon />
      </IconButton>
    </Box>
  );
};

export default Post;
