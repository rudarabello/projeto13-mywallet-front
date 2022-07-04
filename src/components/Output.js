import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import styled from "styled-components";
import Context from "../contexts/Context";
import axios from "axios";
import { useState } from "react";



export default function UsersPage() {
    const navigate = useNavigate();
    const { data } = useContext(Context);
    console.log(data)
    const [value, setValue] = useState("");
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
            type: "output",
            value: value*-1,
            description: description,
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
            <ButtonsFromApi>
                <h1>Nova Saída</h1>
                <form onSubmit={handleSubmit}>
                    <input type="number" placeholder="Valor" onChange={(e) => setValue(e.target.value)} />
                    <input type="text" placeholder="Descrição" onChange={(e) => setDescription(e.target.value)} />
                    <button type="submit">Salvar Saída</button>
                </form>
            </ButtonsFromApi>
        </ContainerUsers>
    );
}

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
const ButtonsFromApi = styled.div`
width: 70%;
max-width: 260px;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 25%;
margin-bottom: 40%;
input {
    width: 100%;
    height: 45px;
    margin-top: 10px;
    border-radius: 5px;
    background-color: white;
    margin-bottom: 10px;
}

button {
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
}
h1{
    width: 100%;
    text-align: start;
    color: white;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    margin-bottom: 100px;
}
`;





