//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
// import data 

const PostsPage = (props) => {
  // set up state for your data

  const { postId, post, likesData, setLikesData } = props;
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      <Post postId={postId} post={post} likesData={likesData} setLikesData={setLikesData}/>
    </div>
  );
};

export default PostsPage;
