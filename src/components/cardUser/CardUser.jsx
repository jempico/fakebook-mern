import "./cardUser.css";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

export default function CardUser({user}) {
    return(
        <div className="cardUserWrapper">
            {user? <img className="cardTopImage" src={user.profilePicture} alt=""></img> : <div className="cardTopImage"><AddCircleRoundedIcon/></div>}
            <div className="cardBody">
                <p className="cardText">{user? user.username : "Add Acount"}</p>
            </div>
        </div>
    )
}