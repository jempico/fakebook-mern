import "./login.css";
import CardUser from "../../components/cardUser/CardUser";
import LoginForm from "../../components/loginForm/LoginForm";
import {useState, useEffect} from "react";

export default function Login() {
    const [userData, setUserData] = useState(null)

    useEffect(()=> {
      fetch(`https://bored-api.web.app/api/user/list`)
          .then(res => res.json())
          .then(data => 
            setUserData(data))
    }, [])

    return(
        <div className="loginContainer">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">fakebook</h3>
                    <h2 className="loginTitle">Recent Logins</h2>
                    <p className="loginText">Click your picture or add an account.</p>
                    <div className="loginCardUsers">
                        {userData && <CardUser key={userData[0].id} user={userData[0]}/> }
                        <CardUser/>
                    </div>
                </div>
                <div className="loginRight">
                    <LoginForm/>
                </div>
            </div>
        </div>
    )
}