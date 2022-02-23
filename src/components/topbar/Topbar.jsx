import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material/"
import {useContext} from "react"
import {AuthContext} from "../../context/AuthContext"
import logoutService from '../../services/logout'
import Tooltip from "../tooltip/Tooltip"

export default function Topbar() {

    // eslint-disable-next-line no-unused-vars
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
                    <span className="topbarLink" onClick={handleLogOut}>Logout</span>
                </div>
                <div className="topbarIcons">

                <Tooltip content="Friend requests" direction="bottom">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="tobarIconBadge">1</span>
                    </div>
                </Tooltip>
                <Tooltip content="Messenger" direction="bottom">
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="tobarIconBadge">2</span>
                    </div>
                </Tooltip>
                <Tooltip content="Notifications" direction="bottom">
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="tobarIconBadge">3</span>
                    </div>
                </Tooltip>
            </div>
                <Tooltip content="Account" direction="bottom">
                    <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
                </Tooltip>
            </div>
        </div>
    )
}