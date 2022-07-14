import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import styled from "styled-components";
import Context from "../contexts/Context";
import axios from "axios";
import { useState } from "react";
import { IoMdArrowRoundBack } from 'react-icons/io';




export default function UsersPage() {
    const navigate = useNavigate();
    const { data } = useContext(Context);
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const API = "https://back-project-mywallet-ruda.herokuapp.com/wallet";
    function handleSubmit(e) {
        e.preventDefault();
        const config = {
            headers: {
                Authorization: `Bearer ${data.token}`
            }
        };
        const body = {
            type: "input",
            value: value * 1,
            description: description,
            category: category,
            subCategory: "input"
        };
        const promise = axios.post(API, body, config
        );
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
        <ContainerUsers>
            <Main>
                <BackArrow onClick={() => navigate('/wallet')}>
                    <IoMdArrowRoundBack color={'#ffffff'} fontSize="2.5em"/>
                </BackArrow>
                <h1>Nova entrada</h1>
                <form onSubmit={handleSubmit}>
                    <input type="number" required placeholder="Valor" onChange={
                        (e) => setValue(e.target.value)} />
                    <input type="text" required placeholder="Descrição" onChange={
                        (e) => setDescription(e.target.value)} />
                    <select onClick={(e) => setCategory(e.target.value)}>
                        <option value="">Escolha a categoria</option>
                        <option value="Salário líquido">Salário líquido</option>
                        <option value="Adiantamento">Adiantamento</option>
                        <option value="Ticket">Ticket</option>
                        <option value="Rendimento Nuconta">Rendimento Nuconta</option>
                        <option value="Retirada da poupança">Retirada da poupança</option>
                    </select>
                    <button type="submit">Salvar Entrada</button>
                </form>
            </Main>
        </ContainerUsers>
    );
};

const ContainerUsers = styled.div`
background: #8C11BE;
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Main = styled.div`
width: 70%;
max-width: 260px;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 25%;
margin-bottom: 20%;
h1{
    width: 100%;
    text-align: start;
    color: white;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    margin-bottom: 50px;
};
form{
    max-width: 256px;
};

select, input{
    background-color: #ffffff;
    color: #ADADAD;
    border: none;
    border-radius: 5px;
    margin-top: 18px;
    width: 100%;
    height: 40px;
}
button{
    width: 100%;
    height: 114px;
    margin-bottom: 10px;
    margin-top: 50px;
    border-radius: 5px;
    background-color: #A328D6;
    border: thin solid #A328D6;
    color: #ffffff;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    :hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px rgba(999, 999, 999, 0.9);
    }
};
`;
const BackArrow = styled.div`
    position: fixed;
    top: 40px;
    left: 38px;
    `;
