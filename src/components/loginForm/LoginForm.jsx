import "./loginForm.css"
import {useState, useContext} from "react"
import loginService from '../../services/login'
import {AuthContext} from "../../context/AuthContext";
import Notification from "../../components/notification/Notification";

export default function LoginForm(){

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })

    // eslint-disable-next-line no-unused-vars
    const {user, isFetching, error, dispatch } = useContext(AuthContext);

    const handleChange = (event) => {
        const {value, name} = event.target;
        setLoginData(prevState => {
         return {...prevState, [name] : value }   
        })
    }

    const handleLogin = async(e) => {
        e.preventDefault();
        try {
            await loginService.login(loginData, dispatch);
            setLoginData({
                email: "",
                password: "",
            })
        } catch(err) {
            console.log(err)
        }
    }    
    
    return(
        <form className="loginFormWrapper" onSubmit={handleLogin}>
            <input 
                className="loginInput" 
                type="email"
                required 
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={loginData.email}
            /> 
            <input 
                className="loginInput" 
                type="password" 
                required
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={loginData.password}                
            /> 
            <button className="loginButton">
                Log In
            </button>
            {error && <Notification message={error}/>}
            <span 
                className="loginForgot">Forgot password?
            </span>
            <hr className="loginBreak"/>
            <button 
                className="newAccountButton">Create new account
            </button>
        </form>
    )
}