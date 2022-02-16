const logout = async (dispatch) => {
    try {
        dispatch({type: "LOGOUT"})
    } catch(e) {
        console.log(e)
    }
    
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {logout};