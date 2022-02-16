export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});

export const Logout = () => ({
    type: "LOGOUT",
});

export const LoginFailure = (message) => ({
    type: "LOGIN_FAILURE",
    payload: message,

});