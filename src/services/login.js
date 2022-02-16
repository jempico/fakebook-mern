import axios from 'axios';
const baseUrl = 'http://localhost:8888/api/login'

const login = async (credentials, dispatch) => {
    try {
        const res = await axios.post(baseUrl, credentials)
        dispatch({type: "LOGIN_SUCCESS", payload: res.data})
        return res.data 
    } catch(e) {
        console.log(e)
        dispatch({type: "LOGIN_FAILURE", payload: "Wrong User or Password"})
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {login};