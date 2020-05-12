/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React from "react";
import "./App.css";
import data from './dummy-data';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';
import PostsPage from './components/PostsContainer/PostsPage';
// import the PostsPage and SearchBar and add them to the App


const App = () => {

  const posts = data;
  console.log(posts)
  return (
    <div className="App">
      {/* Add imported components here to render them */}
      <SearchBarContainer />
      {
        posts.map((post, key) => {
          return <PostsPage key={key} post={post}/>
        })
      }
    </div>
  );
};

export default App;
