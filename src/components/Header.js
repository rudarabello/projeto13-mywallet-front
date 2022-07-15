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
    display: flex;
    justify-content: space-between;
    height: 100px;
    width: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    background-color: #A328D6;
    position: fixed;
    top: 0;
    button{
    width: 120px;
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
    margin-right: 20px;
    margin-left: 20px;
    }
`;
const Logo = styled.div`
    img{
    max-width: 120px;
    min-width: 100px;
    }

`;