import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

import { Routes, Route } from "react-router-dom";

function App() {
    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
    </Routes>
    )
}

export default App;
