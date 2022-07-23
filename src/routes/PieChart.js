import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import Context from "../contexts/Context"
import Loading from "../components/Loading";
import ChartTest from "../components/PieChartCategories.tsx";
import { IoMdArrowRoundBack } from 'react-icons/io';

export default function PieChart() {
  const navigate = useNavigate();
  const { data } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [operations, setOperations] = useState([]);
  const ApiGet = `https://back-project-mywallet-ruda.herokuapp.com/wallet`;
  const configura = {
    plugins: {
      title: {
        display: true,
        text: 'Custom Chart Title',
        padding: {
          top: 10,
          bottom: 30
        }
      },
      legend: {
        display: true,
        position: 'bottom',
        reverse: true,
        labels: {
          color: 'rgb(255, 255, 255)'
        }
      }
    }
  }
  const dataC = {
    labels: ['Orange', 'Blue', 'Yellow', 'Green', 'Red', 'Green'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 1, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(245, 11, 34, 1)',
          'rgba(34, 255, 64, 1)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 222, 34, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  useEffect(() => {
    const config = { headers: { Authorization: `Bearer ${data.token}` } };
    const promise = axios.get(ApiGet, config);
    promise.then((response) => {
      setOperations(response.data)

    })
      .catch(() => {
        alert("Por favor faça o login!");
        navigate("/");
      })
  }, []);
  setTimeout(() => setLoading(true), 1000);
  return (
    <Page>
      {loading === true ?
        <Content>
          <BackArrow onClick={() => navigate('/wallet')}>
            <IoMdArrowRoundBack color={'#ffffff'} fontSize="2.5em" />
          </BackArrow>
          <ChartContent>
            <h1>Chart Test</h1>
            <ChartTest chartData={dataC} options={configura} />
            <h1>Chart Test</h1>
            <ChartTest chartData={dataC} options={configura} />
            <h1>Chart Test</h1>
            <ChartTest chartData={dataC} options={configura} />
            <h1>Chart Test</h1>
            <ChartTest chartData={dataC} options={configura} />
          </ChartContent>
        </Content>
        : <Loading />}
    </Page>
  )
}

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
