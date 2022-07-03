import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./contexts/Context";
import Login from "./components/Login"
import SignUp from "./components/SignUp.js";
import Input from "./components/Input";
import Output from "./components/Output";
import { useState } from "react";
import Fav from "./components/Favicon";
import Hel from "./components/Helmet";
import Wallet from "./components/Wallet";



export default function App() {
    const [data, setData] = useState([{}]);
    return (
        <Context.Provider value={{ data, setData }}>
            <Fav />
            <Hel />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/wallet" element={<Wallet />} />
                    <Route path="/input" element={<Input />} />
                    <Route path="/output" element={<Output />} />
                </Routes>
            </BrowserRouter>
        </Context.Provider>
    )
}