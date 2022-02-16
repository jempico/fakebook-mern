import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material/"
import {useContext} from "react"
import {AuthContext} from "../../context/AuthContext";
import logoutService from '../../services/logout'

export default function Topbar() {

    const {user, isFetching, error, dispatch } = useContext(AuthContext);


    const handleLogOut = async() => {
        try {
            await logoutService.logout( dispatch);
            window.localStorage.removeItem("loggedUser")
        }catch(e){
            console.log(e)
        }
    }
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Fakebook</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search for friend, post or video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Profile</span>
                    <span className="topbarLink" onClick={handleLogOut}>Logout</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="tobarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="tobarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="tobarIconBadge">3</span>
                    </div>
                </div>
            <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
            </div>
        </div>
    )
}