import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import styled from "styled-components";
import { ArrowBackOutline } from 'react-ionicons'
import Context from "../contexts/Context";



export default function UsersPage() {
    const navigate = useNavigate();
    const { account } = useContext(Context);
    return (
        <Container>
            <ContainerUsers>
                <BackArrow onClick={() => navigate('/home')}>
                    <ArrowBackOutline color={'#ffffff'} height="40px" width="40px" />
                </BackArrow>
                <ButtonsFromApi>
                    <input value={account.name} disabled="false" />
                    <input value={account.cpf} disabled="false" />
                    <input value={account.email} disabled="false" />
                    <button onClick={() => navigate(`/user/${account.id}/update`)}>
                        ATUALIZAR
                    </button>
                </ButtonsFromApi>
            </ContainerUsers>
        </Container>
    );
}
const BackArrow = styled.div`
    position: fixed;
    top: 10px;
    left: 38px;
    `;
const Container = styled.div`
background: #8C11BE;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`;
const ContainerUsers = styled.div`
width: 100%;
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
    width: 155px;
    height: 114px;
    margin-bottom: 10px;
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
};`




