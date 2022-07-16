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
import Categorys from "./routes/Categorys";
import CategorysIn from "./routes/CategorysIn";
import CategorysOut from "./routes/CategorysOut";
import SubCategorysOut from "./routes/SubCategorysOut";


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
                    <Route path="/category" element={<Categorys />} />
                    <Route path="/category/entrada" element={<CategorysIn />} />
                    <Route path="/category/saida" element={<CategorysOut />} />
                    <Route path="/category/saida/subcategoria" element={<SubCategorysOut />} />
                </Routes>
            </BrowserRouter>
        </Context.Provider>
    )
}