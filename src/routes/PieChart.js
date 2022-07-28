import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from 'react';
import styled from "styled-components";
import Context from "../contexts/Context"
import ChartTest from "../components/PieChartCategories.tsx";
import { IoMdArrowRoundBack } from 'react-icons/io';
import { setup } from '../components/ConstantsToChart';

export default function PieChart() {
  const navigate = useNavigate();
  const { data } = useContext(Context);
  const [operations, setOperations] = useState([]);
  const ApiGet = `https://back-project-mywallet-ruda.herokuapp.com/wallet`;
  const config = { headers: { Authorization: `Bearer ${data.token}` } };
  const interOut = [];
  const interIn = [];
  const dataInput = {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: [],
      borderColor: [],
      borderWidth: 1,
    },
    ],
  };
  const dataOutput = {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: [],
      borderColor: [],
      borderWidth: 1,
    },
    ],
  };
  useEffect(() => {
    const promise = axios.get(ApiGet, config);
    promise.then(response =>
      setOperations(response.data),
    )
    //.catch(() => {
    //alert("Por favor faça o login!");
    //navigate("/");
    // })
  }, []);
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  for (let index = 0; index < operations.length; index++) {
    const e = operations[index];
    console.log(e)
    if (e.type !== "output") {
      interIn.push([{
        label: e.category,
        value: e.value
      }]);
    } else {
      interOut.push([{
        label: e.category,
        subLabel: e.subCategory,
        value: e.value
      }]);
    }
  };
  operations && operations.map((e) => {
    if (e.type == "input") {
      let label = e.category;
      let valor = e.value;
      dataInput.labels.push(label);
      dataInput.datasets[0].data.push(valor);
      dataInput.datasets[0].backgroundColor.push(getRandomColor());
      dataInput.datasets[0].borderColor.push('#8C11BE');
    } else {
      let label = e.category;
      let valor = e.value * -1;
      interOut.push(label, valor);
      dataOutput.labels.push(label);
      dataOutput.datasets[0].data.push(valor);
      dataOutput.datasets[0].backgroundColor.push(getRandomColor());
      dataOutput.datasets[0].borderColor.push('#8C11BE');
    }
  });
  console.log(operations, interOut, interIn)
  return (
    <Page>
      <Content>
        <BackArrow onClick={() => navigate('/wallet')}>
          <IoMdArrowRoundBack color={'#ffffff'} fontSize="2.5em" />
        </BackArrow>
        <ChartContent>
          <ChartTest chartData={dataInput} options={setup} />
          <ChartTest chartData={dataOutput} options={setup} />
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
