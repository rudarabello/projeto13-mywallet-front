
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import Context from "../contexts/Context"
import TransactionItem from "../components/TransactionItem";
import { IoMdArrowRoundBack } from 'react-icons/io';



export default function Extract() {
    const { data } = useContext(Context);
    const [operations, setOperations] = useState([]);
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
            for (let j = 0; j < values.length; j++) {
                balance += values[j]
            }
            balance = balance.toFixed(2);
            balance = balance.toString().replace(".", ",");
            setTotal(balance);
        }
    }, [operations]);
    return (
        <Page>
            <Content>
                <BackArrow onClick={() => navigate('/wallet')}>
                    <IoMdArrowRoundBack color={'#ffffff'} fontSize="2.5em" />
                </BackArrow>
                <h1>Seus Extratos</h1>
                <TransationArea>
                    <Description>
                        {operations.length === 0 ? <Message>Não há registros ainda</Message>
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
                <Buttons>
                    <button>
                        <span>Atualizar</span>
                    </button>
                </Buttons>
            </Content>
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

const Content = styled.div`
width: 80%;
max-width: 300px;
display: flex;
flex-direction: column;
align-items: center;
h1{
    width: 100%;
    text-align: start;
    color: white;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    margin-top: 60px;
    margin-bottom: 30px;
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

const Buttons = styled.div`
  display: flex;
  margin-top: 30px;
  width: 100%;
  flex-direction: column;
  button{
    width: 100%;
    height: 114px;
    margin-bottom: 10px;
    margin-top: 20px;
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

const BackArrow = styled.div`
    position: relative;
    top: 20px;
    left: -45%;
`;