/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from "react";
import "./App.css";
import data from './dummy-data';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';
import PostsPage from './components/PostsContainer/PostsPage';
// import the PostsPage and SearchBar and add them to the App


const App = () => {

  const postsData = data;

  const [posts, setPosts] = useState(postsData)

  const likesDataInitial = posts.map(post => {
    return [post.likes, false]
  });

  const [likesData, setLikesData] = useState(likesDataInitial);
  

  return (
    <div className="App">
      {/* Add imported components here to render them */}
      <SearchBarContainer postsData={postsData} setPosts={setPosts} />
      {
        posts.map((post, key) => {
          return <PostsPage key={key} postId={key} post={post} likesData={likesData} setLikesData={setLikesData} />
        })
      }
    </div>
  );
};

export default App;
