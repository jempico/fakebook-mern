import "./loginForm.css"
import {useState} from "react"

export default function LoginForm(){

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })

    function handleChange(event){
        const {value, name} = event.target;
        setLoginData(prevState => {
         return {...prevState, [name] : value }   
        })
    }

    function handleSubmit(){
        console.log(loginData)
    }

    return(
        <div className="loginFormWrapper">
            <input 
                className="loginInput" 
                type="text" 
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={loginData.email}
            /> 
            <input 
                className="loginInput" 
                type="password" 
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={loginData.password}                
            /> 
            <button 
                className="loginButton"
                onClick={handleSubmit}
                >Log In
            </button>
            <span 
                className="loginForgot">Forgot password?
            </span>
            <hr className="loginBreak"/>
            <button 
                className="newAccountButton">Create new account
            </button>
        </div>
    )
}