import "./ad.css";
import {useState, useEffect} from "react";


export default function Ad(){
    const [currentAd, fetchNewAdd] = useState("")
    const [isAdHIdden, toggleAdd] = useState(false)

    useEffect(()=> {
        fetch(`https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_SECRET_KEY}`)
            .then(res => res.json())
            .then(data => fetchNewAdd(data.urls.small))
    }, [isAdHIdden])

    const handleClickAd = () => {
        toggleAdd(prevState => {
            return !prevState
        })
    }
    return(
        <div className="rightbarAdWrapper">
            <div className="hideAd" onClick={handleClickAd}>
                <p>{isAdHIdden? "Show ad" : "Hide ad"}</p>
            </div>
            {isAdHIdden === false && <img className="rightbarAd" src={currentAd} alt=""/>}
        </div>
        
    )
}