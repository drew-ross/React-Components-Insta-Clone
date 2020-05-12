// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart, faThumbsUp } from '@fortawesome/free-regular-svg-icons'

const LikeSection = props => {
  const { postId, setLikesData, likesData } = props

  const addLike = () => {

    const newLikesData = likesData.map((post, id) => {
      let likeNum = 1;
      if (post[1]) {
        likeNum = -1;
      }
      if (id === postId) {
        return [post[0] + likeNum, !post[1]];
      } else {
        return post;
      }
    })
    setLikesData(newLikesData);
  }

  return (
    <div>
      <div
        className="like-section"
        key="likes-icons-container"
      >
        <div className="like-section-wrapper">
          <FontAwesomeIcon onClick={addLike} icon={likesData[postId][1] ? faThumbsUp : faHeart} />
        </div>
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      <p className="like-number">{likesData[postId][0]} likes</p>
    </div>
  )
};

export default LikeSection;
