import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Context from "../contexts/Context";

export default function Input() {
  const navigate = useNavigate();
  const { data } = useContext(Context);
  const [value, setValue] = useState("");
  const [categoryToApi, setCategoryToApi] = useState("");
  const [description, setDescription] = useState("");
  const APIPost = "https://back-my-wallet-render.onrender.com/wallet";
  const [categorysFromApi, setCategorysFromApi] = useState([]);
  const tempAxiosFunction = useRef();
  const ApiGet = `https://back-my-wallet-render.onrender.com/chart-in`;
  const axiosFunction = () => {
    const config = { headers: { Authorization: `Bearer ${data.token}` } };
    const promise = axios.get(ApiGet, config);
    promise.then((response) => setCategorysFromApi(response.data));
    promise.catch((err) => {
      alert(err);
      navigate("/");
    });
  };
  tempAxiosFunction.current = axiosFunction;
  useEffect(() => {
    tempAxiosFunction.current();
  }, [categorysFromApi]);
  const body = {
    type: "input",
    value: value * 1,
    description: description,
    category: categoryToApi,
    subCategory: "input",
  };
  function handleSubmit(e) {
    e.preventDefault();
    const config = { headers: { Authorization: `Bearer ${data.token}` } };
    const promise = axios.post(APIPost, body, config);
    promise.then(() => {
      alert("Registrado com sucesso!");
      navigate("/wallet");
    });
    promise.catch((err) => {
      alert(err);
      navigate("/");
    });
  }
  return (
    <Page>
      <Content>
        <BackArrow onClick={() => navigate("/wallet")}>
          <IoMdArrowRoundBack color={"#ffffff"} fontSize="2.5em" />
        </BackArrow>
        <h1>Nova entrada</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            step=".01"
            required
            placeholder="Valor"
            onChange={(e) => setValue(e.target.value)}
          />
          <input
            type="text"
            max="14"
            required
            placeholder="Descrição"
            onChange={(e) => setDescription(e.target.value)}
          />
          <select onClick={(e) => setCategoryToApi(e.target.value)}>
            {categorysFromApi.map((e) => {
              return (
                <option key={e.description} value={e.description}>
                  {e.description}
                </option>
              );
            })}
          </select>
          <button type="submit">Salvar Entrada</button>
        </form>
      </Content>
    </Page>
  );
}

const Page = styled.div`
  background: #8c11be;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  width: 70%;
  max-height: 600px;
  max-width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    width: 100%;
    height: 114px;
    margin-bottom: 10px;
    margin-top: 50px;
    border-radius: 5px;
    background-color: #a328d6;
    border: thin solid #a328d6;
    color: #ffffff;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    :hover {
      cursor: pointer;
      box-shadow: 0px 0px 10px rgba(999, 999, 999, 0.9);
    }
  }
  select,
  input {
    background-color: #ffffff;
    color: #adadad;
    border: none;
    border-radius: 5px;
    margin-top: 18px;
    width: 100%;
    height: 40px;
  }
  h1 {
    width: 100%;
    text-align: start;
    color: white;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    margin-top: 40px;
    margin-bottom: 30px;
  }
`;
const BackArrow = styled.div`
  position: relative;
  top: 20px;
  left: -45%;
`;
