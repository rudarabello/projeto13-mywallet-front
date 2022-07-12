
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import Context from "../contexts/Context"
import Profile from "../assets/Vector.png";
import Loading from "../components/Loading";
import TransactionItem from "../components/TransactionItem";

export default function Wallet() {
  const { data } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [operations, setOperations] = useState();
  const [total, setTotal] = useState();
  const navigate = useNavigate();
  const tempAxiosFunction = useRef();
  const ApiGet = `https://back-project-mywallet-ruda.herokuapp.com/wallet`;
  const axiosFunction = () => {
    const config = { headers: { Authorization: `Bearer ${data.token}` } };
    const promise = axios.get(ApiGet, config);
    promise.then(response => setOperations(response.data));
    promise.catch(error => console.log(error));
  }
  tempAxiosFunction.current = axiosFunction;

  useEffect(() => {
    tempAxiosFunction.current();
  }, []);

  useEffect(() => {
    if (operations) {
      const values = operations.map(({ value }) => { return value });
      let balance = 0;
      for (let j = 0; j < values.length; j++) {
        balance += values[j]
      }
      setTotal(balance);
    }
  }, [operations]);
  function logoutButton() {
    const API = `https://back-project-mywallet-ruda.herokuapp.com/logout`;
    const config = { headers: { Authorization: `Bearer ${data.token}` } };
    const promise = axios.delete(API, config);
    promise.then(() => {
      alert("Logout feito com Sucesso!");
      navigate("/");
    }
    ).catch(err => {
      alert(err)
      console.log(err);
    })
  };
  setTimeout(() => setLoading(true), 2000);
  return (
    <ContainerHome>
      {loading === true ?
        <Container>
          <Header>
            <h1>Olá, {data.name}</h1>
            <img
              onClick={() => logoutButton()}
              src={Profile}
              alt="Botão sair"
              width="10px"
              height="10px"
            />
          </Header>
          <TransationArea>
            <Description>
              {operations.length === 0 ? <Message>Não há registros de entrada ou saída</Message>
                : operations.map((e, index) => {
                  return (
                    <TransactionItem
                      key={index} value={e.value} date={e.date} description={e.description}
                    />)
                })}
            </Description>
          </TransationArea>
          <OverBalance>
            {operations.length === 0 ? "" :
              <><h1>SALDO</h1><span>R$ {total}</span></>
            }
          </OverBalance>
          <Buttons>
            <button onClick={() => navigate("/input")}><Icon><ion-icon name="add-circle-outline"></ion-icon></Icon>Nova Entrada</button>
            <button onClick={() => navigate("/output")}><Icon><ion-icon name="remove-circle-outline"></ion-icon></Icon>Nova Saída</button>
          </Buttons>
        </Container>
        : <Loading />}
    </ContainerHome>
  );
};
const Container = styled.div`
  padding-top: 50px;
  max-width: 450px;
  min-width: 330px ;
  background: #8C11BE;
  height: 90vh;

`;
const ContainerHome = styled.div`
  display: flex;
  background: #7511BE;
  align-items: center;
  align-content: center;
  height: 100vh;
  width: 100%;
  flex-direction: column;
`;

const OverBalance = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #FFFFFF;
  width: 100%;
  min-width: 260px;
  max-width: 326px;

  h1{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #000000;
    padding-left: 3px;
  }
  span{
    font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  text-align: right;
  color: #000000;
  padding-right: 3px;
  }
`;

const TransationArea = styled.div`
  background-color: #FFFFFF;
  width: 100%;
  min-width: 260px;
  max-width: 326px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  min-height: 446px;
`;
const Description = styled.div`
  background: #FFFFFF;
  width: 100%;
  padding-top: 10px;
`;
const Message = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  width: 180px;
  color: #868686;
  margin-left: 70px;
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

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 50px;
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
const Icon = styled.div`
ion-icon {
  position: relative;
  left: -55px;
  top: -18px;
  font-size: 30px;
  color: #FFFFFF;
}`;

