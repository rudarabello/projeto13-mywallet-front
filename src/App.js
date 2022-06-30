import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./contexts/Context";
import ContextPlan from "./contexts/ContextPlan";
import Login from "./components/Login"
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Input from "./components/Input";
import Output from "./components/Output";
import { useState } from "react";
import Fav from "./components/Favicon";
import Hel from "./components/Helmet";



export default function App() {
    const [account, setAccount] = useState([{}]);
    const [infoPlan, setInfoPlan] = useState([{}]);
    return (
        <Context.Provider value={{ account, setAccount }}>
            <ContextPlan.Provider value={{ infoPlan, setInfoPlan }}>
                <Fav />
                <Hel />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/input" element={<Input/>} />
                        <Route path="/output" element={<Output />} />
                    </Routes>
                </BrowserRouter>
            </ContextPlan.Provider>
        </Context.Provider>
    )
}