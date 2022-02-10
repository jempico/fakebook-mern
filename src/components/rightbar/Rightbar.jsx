import "./rightbar.css"
import {Users} from "../../dummyData.js";
import Online from "../../components/online/Online";

export default function Rightbar(){
  return(
    <div className="rightbarContainer">
        <div className="rightbarWrapper">
            <div className="birthdayContainer">
              <img src="/assets/gift.png" alt="" className="birthdayImg" />
              <span className="birthdayText"> Paola Sen and 3 other friends have a birthday today.</span>
            </div>
            <img src="/assets/ad.png" alt="" className="rightbarAd" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
              {Users.map(u => <Online key={u.id} user={u}/>)}
            </ul>
        </div>
    </div>
   )
  }