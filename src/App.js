import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./contexts/Context";
import Login from "./routes/Login"
import SignUp from "./routes/SignUp.js";
import Input from "./routes/Input";
import Output from "./routes/Output";
import { useState } from "react";
import Fav from "./components/Favicon";
import Hel from "./components/Helmet";
import Wallet from "./routes/Wallet";
import Home from "./routes/Home";



export default function App() {
    const [data, setData] = useState([{}]);
    return (
        <Context.Provider value={{ data, setData }}>
            <Fav />
            <Hel />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/wallet" element={<Wallet />} />
                    <Route path="/input" element={<Input />} />
                    <Route path="/output" element={<Output />} />
                </Routes>
            </BrowserRouter>
        </Context.Provider>
    )
}