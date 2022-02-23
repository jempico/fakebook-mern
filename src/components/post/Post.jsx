import {useState, useEffect} from "react";
import "./post.css";
import {MoreVert} from "@mui/icons-material/";
import Comment from "../comment/Comment";
import DropdownList from "../dropdownList/DropdownList";

export default function Post({post, user, comments}){
  const [likes, setLikes] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)
  const [commentsAreShown, toggleComments] = useState(false)
  const [userData, setUserData] = useState(null)
  const [moreVertIsShown, toggleMoreVert] = useState(false)

  useEffect(()=> {
    fetch(`https://bored-api.web.app/api/user/list`)
        .then(res => res.json())
        .then(data => 
          setUserData(data))
  }, [])

  const likeHandler = () => {
    setIsLiked(prevState => {
      return !prevState 
    })
    setLikes(prevState => {
      if (isLiked === false) {
        return prevState + 1;
      } else {
        return prevState - 1;
      }
    })
  }

  const commentHandler = () => {
    toggleComments(prevState => {
      return !prevState
    })
  }

  const handleMoreVert = () => {
    toggleMoreVert(prevState => {
      return !prevState
    })
  } 

    return(
      <div className="post">
          <div className="postWrapper">
              <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={user[0].profilePicture} alt="" />
                    <span className="postUsername">{user[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                  <div className="postTopRight" onClick={handleMoreVert}>
                  <MoreVert/> 
                      {moreVertIsShown && <DropdownList/>}
                  </div>
              </div>
              <div className="postCenter">
                <span className="postText">{post.desc}</span>
                <img className="postImg" src={post.photo} alt="" />
              </div>
              <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src={isLiked? "/assets/dislike.png": "/assets/like.png"} alt="" onClick={likeHandler}/>
                    <span className="postLikeCounter"> {likes} users like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText" onClick={commentHandler}> {post.comment} comments </span>                    
                </div>
              </div>
              <ul className="postCommentsList">
                {commentsAreShown && userData && comments.map(c => <Comment key={c.id} comment={c} user={userData.filter(u => u.id === c.userId)[0]}/>)}
                </ul>
          </div>
      </div>
     )
    }