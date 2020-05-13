// You do not need to change any code in this file
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faCircle, faCompass } from '@fortawesome/free-regular-svg-icons'
import "./SearchBar.css";

const SearchBar = (props) => {

  const { postsData, setPosts } = props;

  const searchFilter = (event) => {
    if(!event.target.value) {
      setPosts(postsData);
    } else {
      setPosts(postsData.filter(post => post.username.toLowerCase().includes(event.target.value.toLowerCase())));
    }
  }

  return (
    <div className="search-bar-wrapper">
      <div className="social">
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <form className="search-form">
        <input
          onChange={searchFilter}
          type="text"
          placeholder="Search"
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <FontAwesomeIcon icon={faCompass} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faCircle} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
