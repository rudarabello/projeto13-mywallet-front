import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from 'react';
import styled from "styled-components";
import Context from "../contexts/Context"
import ChartTest from "../components/PieChartCategories.tsx";
import { IoMdArrowRoundBack } from 'react-icons/io';
import { setup, dataChart } from '../components/ConstantsToChart';

export default function PieChart() {
  const navigate = useNavigate();
  const { data } = useContext(Context);
  const [operations, setOperations] = useState([]);
  const ApiGet = `https://back-project-mywallet-ruda.herokuapp.com/wallet`;
  const config = { headers: { Authorization: `Bearer ${data.token}` } };
  const dataInput = []
  useEffect(() => {
    const promise = axios.get(ApiGet, config);
    promise.then(response =>
      setOperations(response.data)
    )
      .catch(() => {
        alert("Por favor faça o login!");
        navigate("/");
      })
  }, []);
  console.log(operations)
  useEffect(() => {
    {
      operations.map((e) => {
        if (e.type === "input") {
          let labels = {labels:e.category};
          let data = {data:e.value};
          dataInput.push([labels, data]);
        } else {
          let dataOutput = [e.category,e.value]
        }
      })
    }
    
  }, [])
  console.log(dataInput)
  return (
    <Page>
      <Content>
        <BackArrow onClick={() => navigate('/wallet')}>
          <IoMdArrowRoundBack color={'#ffffff'} fontSize="2.5em" />
        </BackArrow>
        <ChartContent>
          <ChartTest chartData={dataChart} options={setup} />
        </ChartContent>
      </Content>
    </Page>
  )
};

const ChartContent = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;
const Page = styled.div`
background: #8C11BE;
display: flex;
align-items: center;
justify-content: center;
height: 100%;
min-height: 850px;
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
    font-size: 22px;
    line-height: 31px;
    margin-bottom: 30px;
    margin-top: 25px;
};
`;

const BackArrow = styled.div`
    position: relative;
    top: 20px;
    left: -50%;
`;
