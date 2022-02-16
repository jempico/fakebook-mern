import "./rightbar.css"
import Online from "../../components/online/Online";
import Ad from "../../components/ad/Ad";
import {useState, useEffect} from "react";

export default function Rightbar(){
  const [userData, setUserData] = useState(null)

  useEffect(()=> {
    fetch(`https://bored-api.web.app/api/user/list`)
        .then(res => res.json())
        .then(data => 
          setUserData(data))
  }, [])

  return(
    <div className="rightbarContainer">
        <div className="rightbarWrapper">
            <div className="birthdayContainer">
              <img src="/assets/gift.png" alt="" className="birthdayImg" />
              <span className="birthdayText"> Paola Sen and 3 other friends have a birthday today.</span>
            </div>
            <Ad/>
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
              {userData && userData.map(u => <Online key={u.id} user={u}/>)}
            </ul>
        </div>
    </div>
   )
  }