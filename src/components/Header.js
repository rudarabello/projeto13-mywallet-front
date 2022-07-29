import React from 'react';
import styled from 'styled-components';
import logo from '../assets/MyWallet.png';
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate()
    return (
            <Container>
                <button onClick={() => navigate('/sign-up')}>Cadastre-se</button>
                <Logo onClick={() => navigate('/')} ><img src={logo} alt="logo"width="35%" /></Logo>
                <button onClick={() => navigate('/login')}>Entrar</button>
            </Container>
    )
}

export default Header

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
    height: 45px;
    border: none;
    background: #a343d5;
    border-radius: 8px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    margin-right: 10px;
    margin-left: 10px;
    }
`;
const Logo = styled.div`
    img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 120px;
    min-width: 100px;
    }

`;