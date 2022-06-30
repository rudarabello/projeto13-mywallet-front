import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import styled from "styled-components";
import Context from "../contexts/Context";



export default function UsersPage() {
    const navigate = useNavigate();
    const { account } = useContext(Context);
    return (
        <ContainerUsers>
            <ButtonsFromApi>
            <h1>Nova entrada</h1>
                <input value="Valor" />
                <input value="Descrição" />
                <button onClick={() => navigate(`/home`)}>
                    Salvar Entrada
                </button>
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





