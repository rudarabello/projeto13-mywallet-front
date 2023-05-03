import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fav from "./components/Favicon";
import Hel from "./components/Helmet";
import Context from "./contexts/Context";
import Categorys from "./routes/Categorys";
import CategorysIn from "./routes/CategorysIn";
import CategorysOut from "./routes/CategorysOut";
import Extract from "./routes/Extract";
import Home from "./routes/Home";
import Input from "./routes/Input";
import Login from "./routes/Login";
import Output from "./routes/Output";
import PieChart from "./routes/PieChart";
import SignUp from "./routes/SignUp.js";
import SubCategorysOut from "./routes/SubCategorysOut";
import Wallet from "./routes/Wallet";

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
          <Route
            path="/category/output/subcategory"
            element={<SubCategorysOut />}
          />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}
