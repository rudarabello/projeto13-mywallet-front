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
import PieChart from "./routes/PieChart";
import Extract from "./routes/Extract";


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
                    <Route path="/chart" element={<PieChart />} />
                    <Route path="/output" element={<Output />} />
                    <Route path="/extract" element={<Extract />} />
                    <Route path="/category" element={<Categorys />} />
                    <Route path="/category/input" element={<CategorysIn />} />
                    <Route path="/category/output" element={<CategorysOut />} />
                    <Route path="/category/output/subcategory" element={<SubCategorysOut />} />
                    
                </Routes>
            </BrowserRouter>
        </Context.Provider>
    )
}