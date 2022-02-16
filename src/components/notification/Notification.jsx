import "./notification.css"

export default function Notification({message}){
    return(
        <div className="notificationWrapper">
            <p className="notification error">{message}</p>
        </div>
    )
}