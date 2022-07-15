import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Home = () => {
    return (
        <Container>
            <Header />
            <Text>
                <h1>Seja bem-vindo!</h1>
                <p>My Wallet é um app que te ajuda com o gerenciamento dos recursos financeiros!</p>
                <p>Com ele você pode categorizar seus recebimentos e gastos</p>
                <p>gerar um gráfico para te ajudar a ver pra onde está indo seu dinheiro</p>
                <p>retirar extratos por periodos</p>
                <p>e criar alerta por email de contas a pagar! </p>
            </Text>
        </Container>
    )
}

export default Home


const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
`;

const Text = styled.div`
    max-width: 330px;
    h1{
        margin-top: 20px;
        font-weight: 900;
        font-size: xx-large;
        text-align: center;
        margin-bottom: 40px;
    }
    p{
    font-family: 'Raleway';
    font-style: normal;
    color: black;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 1.8em;
    
    }
`;