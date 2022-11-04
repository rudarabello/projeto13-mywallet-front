import React from 'react';
import styled from 'styled-components';
import logo from '../assets/MyWallet.png';
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate()
    return (
            <Container>
                <Logo onClick={() => navigate('/')} ><img src={logo} alt="logo"width="35%" /></Logo>
                <ButtonContainer>
                <button onClick={() => navigate('/sign-up')}>Cadastre-se</button>
                <button onClick={() => navigate('/login')}>Entrar</button>
                </ButtonContainer>
            </Container>
    )
}

export default Header

const ButtonContainer = styled.div`
    img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 120px;
    min-width: 100px;
    }

`;

const Container = styled.div`
    z-index: 2;
    justify-content: center;
    align-items: center;
    display: flex;
    justify-content: space-between;
    height: 100px;
    width: 100%;
    display: flex;
    background-color: #A328D6;
    top: 0;
    button{
    min-width: 110px;
    height: 25px;
    border: none;
    background: #a343d5;
    border-radius: 8px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 16px;
    color: #FFFFFF;
    margin-right: 5px;
    margin-left: 10px;
    margin-bottom: 10px;
    }
`;
const Logo = styled.div`
    img{
    display: block;
    margin-left: 5px;
    margin-right: auto;
    max-width: 120px;
    min-width: 100px;
    }

`;