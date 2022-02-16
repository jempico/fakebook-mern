import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import { Routes, Route, Navigate } from "react-router-dom";

function App() {
    const {user} = useContext(AuthContext);

    return (
    <Routes>
        <Route path="/" element={ user? <Home /> : <Login />} />
        <Route path="/login" element={ user? <Navigate to="/"/> : <Login />} />
    </Routes>
    )
}

export default App;
