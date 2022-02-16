import {useState} from "react"
import "./post.css"
import {MoreVert} from "@mui/icons-material/"


export default function Post({post, user}){
  const [likes, setLikes] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)
  const [commentsAreShown, toggleComments] = useState(false)

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
    toggleComments( prevState => {
      return !prevState
    })
  }

  const commentsList = <div> No to my future self: This should render CommentsList Component</div>
    return(
      <div className="post">
          <div className="postWrapper">
              <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={user[0].profilePicture} alt="" />
                    <span className="postUsername">{user[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
              </div>
              <div className="postCenter">
                <span className="postText">{post?.desc}</span>
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
              <div className="postCommentsList">
                {commentsAreShown && commentsList}
                </div>
          </div>
      </div>
     )
    }