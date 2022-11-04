import React from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
    return (
        <Container>
             <Page> 
            <Header />
            <TextA>
                <h1>Seja bem-vindo!</h1>
            </TextA>
            <Banner />
            <TextB>
                <p>My Wallet é um app que te ajuda com o gerenciamento dos recursos financeiros!</p>
                <p>Com ele você pode categorizar seus recebimentos e gastos</p>
                <p>gerar um gráfico para te ajudar a ver pra onde está indo seu dinheiro</p>
                <p>e retirar extratos por periodos!</p>
            </TextB>
            <Footer />
            </Page> 
        </Container>
    )
}
 //e criar alertas por email de contas a pagar!
export default Home

const Container = styled.div`
width: 100%;
background-color: #8C11BE;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 50px;

`;

const Page = styled.div`
display: flex;
flex-direction: column;
align-items: center;
max-width: 240px;
form{
    width: 100%;
display: flex;
flex-direction: column;
gap: 6px;
margin-bottom: 25px;
}
`;

const TextA = styled.div`
    z-index: 1;
    max-width: 330px;
    margin-top: 10px;
    font-weight: 900;
    font-size: 25px;
    padding-left: 5px;
    color: #ffffff;
    font-family: 'Raleway';
    font-style: normal;
`;

const TextB = styled.div`
    width: 100%;
    text-align: center;
    font-weight: 900;
    font-size: xx-large;
    text-align: center;
    margin-bottom: 40px;
    p{
    padding: 15px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 1.8em;
    color: #ffffff;
    
    }
`;