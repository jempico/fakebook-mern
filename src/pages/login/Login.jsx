import "./login.css";
import CardUser from "../../components/cardUser/CardUser";
import {Users} from "../../dummyData.js";
import LoginForm from "../../components/loginForm/LoginForm";

export default function Login() {
    return(
        <div className="loginContainer">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">fakebook</h3>
                    <h2 className="loginTitle">Recent Logins</h2>
                    <p className="loginText">Click your picture or add an account.</p>
                    <div className="loginCardUsers">
                        <CardUser key={Users[0].id} user={Users[0]}/>
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