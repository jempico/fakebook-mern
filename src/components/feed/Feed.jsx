import "./feed.css"
import Share from "../../components/share/Share";
import Post from "../../components/post/Post";
import PostSkeleton from "../../components/skeletons/PostSkeleton";
import {useState, useEffect} from "react";

export default function Feed(){
  const [postData, setPostData] = useState(null)
  const [userData, setUserData] = useState(null)

  useEffect(()=> {
    fetch(`https://bored-api.web.app/api/post/list`)
        .then(res => res.json())
        .then(data => 
          setPostData(data))
}, [])

useEffect(()=> {
  fetch(`https://bored-api.web.app/api/user/list`)
      .then(res => res.json())
      .then(data => 
        setUserData(data))
}, [])
     
   return(
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {postData? postData.map(p => (<Post key={p.id} post={p} user={userData.filter(u => u.id === p.userId)}/>)) : <div><PostSkeleton/><PostSkeleton/></div>}
      </div>
    </div>
   )
  }