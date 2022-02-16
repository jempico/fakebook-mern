import "./sidebar.css"
import {RssFeed, Chat, PlayCircleFilled, Group, Bookmark, HelpOutline, WorkOutline, Event, School} from "@mui/icons-material/"
import CloseFriend from "../../components/closeFriend/CloseFriend";
import {useState, useEffect} from "react";

export default function Sidebar() {
  const [userData, setUserData] = useState(null)

  useEffect(()=> {
    fetch(`https://bored-api.web.app/api/user/list`)
        .then(res => res.json())
        .then(data => 
          setUserData(data))
  }, [])
  
  return(
    <div className="sidebar"> 
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarlistItem">
            <RssFeed classname="sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarlistItem">
            <Chat classname="sidebarIcon"/>
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarlistItem">
            <PlayCircleFilled classname="sidebarIcon"/>
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarlistItem">
            <Group classname="sidebarIcon"/>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarlistItem">
            <Group classname="sidebarIcon"/>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarlistItem">
            <Bookmark classname="sidebarIcon"/>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarlistItem">
            <HelpOutline classname="sidebarIcon"/>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarlistItem">
            <WorkOutline classname="sidebarIcon"/>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarlistItem">
            <Event classname="sidebarIcon"/>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarlistItem">
            <School classname="sidebarIcon"/>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {userData && userData.map(u => (<CloseFriend key={u.id} user={u}/>))}
        </ul>
      </div>
    </div>
  );
} 