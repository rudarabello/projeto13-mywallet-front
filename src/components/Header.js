import React from 'react';
import styled from 'styled-components';
import logo from '../assets/MyWallet.png';
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate()
    return (
            <Container>
                <Logo onClick={() => navigate('/')} ><img src={logo} width="40%" /></Logo>
                <button onClick={() => navigate('/login')}>Login</button>
            </Container>
    )
}

export default Header

const Container = styled.div`
    height: 100px;
    width: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    background-color: #A328D6;
    padding-left: 20px;
    padding-right: 20px;
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
    }
`;
const Logo = styled.div`
    display: flex;
    width: 100%;
    img {
    display: block;
    max-width: 120px;
    margin-left: 10px;
    margin-right: auto;
}

`;