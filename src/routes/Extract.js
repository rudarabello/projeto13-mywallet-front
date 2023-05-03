import axios from "axios";
import { useContext, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TransactionItem from "../components/TransactionItem";
import Context from "../contexts/Context";

export default function Extract() {
  const { data } = useContext(Context);
  const [operations, setOperations] = useState([]);
  const [initial, setInitial] = useState("");
  const [final, setFinal] = useState("");
  const navigate = useNavigate();
  const APIPost = "https://back-my-wallet-render.onrender.com/extract";
  const body = {
    initial: initial,
    final: final,
  };
  function handleSubmit(e) {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    };
    const promise = axios.post(APIPost, body, config);
    promise.then((response) => setOperations(response.data));
    promise.catch((err) => {
      alert(err);
      navigate("/");
    });
  }
  return (
    <Page>
      <Content>
        <BackArrow onClick={() => navigate("/wallet")}>
          <IoMdArrowRoundBack color={"#ffffff"} fontSize="2.5em" />
        </BackArrow>
        <h1>Seus Extratos</h1>
        <TransationArea>
          <Description>
            {operations.length === 0 ? (
              <Message>Por favor, selecione o intervalo</Message>
            ) : (
              operations.map((e, index) => {
                let valueTransaction = e.value;
                valueTransaction = valueTransaction.toFixed(2);
                valueTransaction = valueTransaction
                  .toString()
                  .replace(".", ",");
                return (
                  <TransactionItem
                    key={index}
                    value={valueTransaction}
                    date={e.date}
                    description={e.description}
                  />
                );
              })
            )}
          </Description>
        </TransationArea>
        <form onSubmit={handleSubmit}>
          <Inputs>
            <SubInput>
              <label for="name">Data inicial</label>
              <input
                type="date"
                max="14"
                required
                onChange={(e) => setInitial(e.target.value)}
              />
            </SubInput>
            <SubInput>
              <label for="name">Data final</label>
              <input
                type="date"
                max="14"
                required
                onChange={(e) => setFinal(e.target.value)}
              />
            </SubInput>
          </Inputs>
          <button type="submit">Atualizar</button>
        </form>
      </Content>
    </Page>
  );
}

const SubInput = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin-top: 10px;
    width: 100%;
    text-align: center;
    color: white;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 31px;
  }
`;
const Inputs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Page = styled.div`
  background: #8c11be;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  min-height: 870px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    width: 100%;
    height: 114px;
    margin-bottom: 30px;
    margin-top: 50px;
    border-radius: 5px;
    background-color: #a328d6;
    border: thin solid #a328d6;
    color: #ffffff;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    :hover {
      cursor: pointer;
      box-shadow: 0px 0px 10px rgba(999, 999, 999, 0.9);
    }
  }
  select,
  input {
    background-color: #ffffff;
    color: #adadad;
    border: none;
    border-radius: 5px;
    height: 40px;
  }
  h1 {
    width: 100%;
    text-align: start;
    color: white;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    margin-top: 40px;
    margin-bottom: 30px;
  }
`;

const TransationArea = styled.div`
  background-color: #ffffff;
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
  background: #ffffff;
  width: 100%;
  padding-top: 10px;
`;
const Message = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  width: 180px;
  color: #868686;
  margin-left: 70px;
`;

const BackArrow = styled.div`
  position: relative;
  top: 20px;
  left: -45%;
`;
