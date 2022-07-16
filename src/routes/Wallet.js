
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import Context from "../contexts/Context"
import Loading from "../components/Loading";
import TransactionItem from "../components/TransactionItem";
import { TiDocumentText } from 'react-icons/ti';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { VscPieChart } from 'react-icons/vsc';
import { IoIosLogOut } from 'react-icons/io';
import { AiOutlineUnorderedList } from 'react-icons/ai';


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
    promise.catch(() => {
      alert("Por favor faça o login!");
      navigate("/");
    }
    )
  }
  tempAxiosFunction.current = axiosFunction;

  useEffect(() => {
    tempAxiosFunction.current();
  }, []);

  useEffect(() => {
    if (operations) {
      const values = operations.map(({ value }) => { return value });
      let balance = 0;
      console.log(values)
      for (let j = 0; j < values.length; j++) {
        balance += values[j]
      }
      balance = balance.toFixed(2);
      balance = balance.toString().replace(".", ",");
      setTotal(balance);
      console.log(balance)
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
  setTimeout(() => setLoading(true), 1000);
  return (
    <Page>
      {loading === true ?
        <><LogOut onClick={() => logoutButton()}>
          <IoIosLogOut color={'#ffffff'} fontSize="2.5em" />
        </LogOut>
          <Content>
            <Header>
              <h1>Olá, {data.name}</h1>
            </Header>
            <TransationArea>
              <Description>
                {operations.length === 0 ? <Message>Não há registros de entrada ou saída</Message>
                  : operations.map((e, index) => {
                    let valueTransaction = e.value;
                    valueTransaction = valueTransaction.toFixed(2);
                    valueTransaction = valueTransaction.toString().replace(".", ",");
                    return (
                      <TransactionItem
                        key={index} value={valueTransaction} date={e.date} description={e.description} />);
                  })}
              </Description>
            </TransationArea>
            <OverBalance>
              {operations.length === 0 ? "" :
                <><h1>SALDO</h1><span>R$ {total}</span></>}
            </OverBalance>
            <Buttons>
              <button onClick={() => navigate("/input")}>
                <span>Nova Entrada</span><Icon><AiOutlinePlusCircle fontSize="1.5em" /></Icon>
              </button>
              <button onClick={() => navigate("/output")}>
                <span>Nova Saída</span><Icon><AiOutlineMinusCircle fontSize="1.5em" /></Icon>
              </button>
              <button>
                <span>Extratos</span><Icon><TiDocumentText fontSize="1.5em" /></Icon>
              </button>
              <button>
                <span>Gráficos</span><Icon><VscPieChart fontSize="1.5em" /></Icon>
              </button>
              <button onClick={() => navigate("/category")}>
                <span>Categorias</span><Icon><AiOutlineUnorderedList fontSize="1.5em" /></Icon>
              </button>
            </Buttons>
          </Content></>
        : <Loading />}
    </Page>
  );
};

const Page = styled.div`
background: #8C11BE;
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
min-height: 850px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const LogOut = styled.div`
    text-align: end;
    width: 100% ;
    top: 20px;
    padding-right: 28px;
    font-size: 15px;
`;
const Content = styled.div`
width: 80%;
max-width: 300px;
display: flex;
flex-direction: column;
align-items: center;
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
  width: 100%;
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
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 30px;
  width: 100%;
  flex-direction: column;
    button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 15px;
    width: 100%;
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
padding-top: 3px;
position: relative;
color: #FFFFFF;
`;
