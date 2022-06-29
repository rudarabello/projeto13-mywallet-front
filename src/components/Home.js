
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from 'react';
import styled from "styled-components";
import Context from "../contexts/Context";
import ContextPlan from "../contexts/ContextPlan";
import Profile from "../assets/Profile.png";
import Loading from "../components/Loading";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { account } = useContext(Context);
  const { infoPlan } = useContext(ContextPlan);
  function deletePlanDataFromApi() {
    const config = {
      headers: {
        Authorization: `Bearer ${account.token}`,
      },
    };
    const decision = window.confirm(
      "Tem certeza que deseja cancelar o seu Plano ?"
    );
    if (decision) {
      const promise = axios.delete(
        "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions",
        config
      );
      promise.then(() => {
        alert(
          "Seu plano foi cancelado com sucesso, contrate outro agora mesmo!"
        );
        navigate("/subscriptions");
      });
      promise.catch((error) => {
        alert(
          "Tive um problema tecnico ao cancelar o seu Plano, por favor tente mais tarde ",
          error
        );
      });
    }
  }
  setTimeout(() => setLoading(true), 2000);
  return (
    <ContainerHome>
      {loading === true ?
        <Container>
          <Header>

            <h1>Olá, {account.name}</h1>
            <img
              onClick={() => navigate(`/user/${infoPlan.id}`)}
              src={Profile}
              alt="Botão sair"
              width="10px"
              height="10px"
            />
          </Header>
          <TransationArea>
          </TransationArea>
          <Buttons>
            <button onClick={() => navigate("/Sum")}>Nova Entrada</button>
            <button onClick={() => navigate("/Deduct")}>Nova Saída</button>
          </Buttons>
        </Container>
        : <Loading />}
    </ContainerHome>
  );
}

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
const TransationArea = styled.div`
  background-color: #FFFFFF;
  width: 100%;
  min-width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 10%;
  min-height: 446px;
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

