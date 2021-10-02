import "./rightbar.css"


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
              <li className="rightbarFriend">
                <div className="rightbarImgProfileContainer">
                  <img src="/assets/person/3.jpeg" alt="" className="rightbarImgProfile" />
                  <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUsername">John Carter</span>
              </li>
              <li className="rightbarFriend">
                <div className="rightbarImgProfileContainer">
                  <img src="/assets/person/3.jpeg" alt="" className="rightbarImgProfile" />
                  <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUsername">John Carter</span>
              </li>
              <li className="rightbarFriend">
                <div className="rightbarImgProfileContainer">
                  <img src="/assets/person/3.jpeg" alt="" className="rightbarImgProfile" />
                  <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUsername">John Carter</span>
              </li>
              <li className="rightbarFriend">
                <div className="rightbarImgProfileContainer">
                  <img src="/assets/person/3.jpeg" alt="" className="rightbarImgProfile" />
                  <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUsername">John Carter</span>
              </li>
              <li className="rightbarFriend">
                <div className="rightbarImgProfileContainer">
                  <img src="/assets/person/3.jpeg" alt="" className="rightbarImgProfile" />
                  <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUsername">John Carter</span>
              </li>
            </ul>
        </div>
    </div>
   )
  }