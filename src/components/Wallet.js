
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import Context from "../contexts/Context"
import Profile from "../assets/Vector.png";
import Loading from "./Loading";


export default function Wallet() {
  const { data } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [operations, setOperations] = useState();
  const navigate = useNavigate();
  const tempAxiosFunction = useRef();
  const ApiGet = `https://back-project-mywallet-ruda.herokuapp.com/wallet`;
  const axiosFunction = () => {
    const config = { headers: { Authorization: `Bearer ${data.token}`}};
    const promise = axios.get(ApiGet, config);
    promise.then(response => setOperations(response.data));
    promise.catch(error => console.log(error));
  }
  tempAxiosFunction.current = axiosFunction;

  useEffect(() => {
    tempAxiosFunction.current();
  }, []);

  setTimeout(() => setLoading(true), 2000);
  return (
    <ContainerHome>
      {loading === true ?
        <Container>
          <Header>

            <h1>Olá, {data.name}</h1>
            <img
              onClick={() => navigate(`/`)}
              src={Profile}
              alt="Botão sair"
              width="10px"
              height="10px"
            />
          </Header>
          <TransationArea>
            <Description>
              {operations === []
                ? operations.map(
                  (data, index) => (
                    <span key={index}>{index + 1} {data.date}{""}{data.description}{data.value} </span>
                  ))
                : <Message>Não há registros de entrada ou saída</Message>}
            </Description>
            <Balance>
              <h2>{operations !== []? '': 'SALDO'}</h2>
            </Balance>
          </TransationArea>
          <Buttons>
            <button onClick={() => navigate("/input")}>Nova Entrada</button>
            <button onClick={() => navigate("/output")}>Nova Saída</button>
          </Buttons>
        </Container>
        : <Loading />}
    </ContainerHome>
  );
}

const TransationArea = styled.div`
  background-color: #FFFFFF;
  width: 100%;
  min-width: 260px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 10%;
  min-height: 446px;
`;
const Description = styled.div`
  background: #FFFFFF;
`;
const Message = styled.div`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  width: 180px;
  color: #868686;
`;

const Balance = styled.div`
  background: #FFFFFF;
  margin-bottom: 0;
  flex-direction: column-reverse;
`;

const Container = styled.div`
  padding-top: 50px;
  max-width: 450px;
  min-width: 330px ;
  background: #8C11BE;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  h1{
    text-align: start;
    margin-left: 0 ;
    color: white;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
  }
  img {
    width: 20px;
    height: 20px;
  }
`;

const ContainerHome = styled.div`
  display: flex;
  background: #8C11BE;
  align-items: center;
  align-content: center;
  height: 100vh;  
  flex-direction: column;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  width: 100%;
  flex-direction: row;
  position: relative;
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
  }
`;

