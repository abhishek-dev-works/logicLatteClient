import React from "react";
import CommonWrapper from "../Common/CommonWrapper";
import ImageSrc from "../../assets/test/Nature_.jpg";
import video from "../../assets/test/video.mp4";
import Post from "../Common/Post";

const PostsSection = () => {
  return (
    <>
      <div
        style={{
          paddingBottom: 10,
          height: "calc(100vh - 100px)",
          width: '85em',
          overflowY: "scroll",
        }}
      >
        <Post
          post_id={0}
          user_id={0}
          image={ImageSrc}
          heading={"Nature is Pretty"}
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, deserunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, deserunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, deserunt."
          created_at={new Date()}
          updated_at={new Date()}
        />
        <Post
          post_id={0}
          user_id={0}
          video={video}
          heading={"Nature is Pretty"}
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, deserunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, deserunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, deserunt."
          created_at={new Date()}
          updated_at={new Date()}
        />
        <Post
          post_id={0}
          user_id={0}
          image={ImageSrc}
          heading={"Nature is Pretty"}
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, deserunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, deserunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, deserunt."
          created_at={new Date()}
          updated_at={new Date()}
        />
      </div>
    </>
  );
};

export default PostsSection;
