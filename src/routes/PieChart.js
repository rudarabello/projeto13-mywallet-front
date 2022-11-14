import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import Context from '../contexts/Context';
import ChartTest from '../components/PieChartCategories.tsx';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { setup } from '../components/ConstantsToChart';
export default function PieChart() {
  const navigate = useNavigate();
  const { data } = useContext(Context);
  const [operations, setOperations] = useState([]);
  const ApiGet = `https://back-project-mywallet-ruda.herokuapp.com/wallet`;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const config = { headers: { Authorization: `Bearer ${data.token}` } };
  const interOut = [];
  const interIn = [];
  const dataInput = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  };
  const dataOutput = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  };
  useEffect(() => {
    const promise = axios.get(ApiGet, config);
    promise
      .then((response) => setOperations(response.data))
      .catch(() => {
        alert('Por favor faça o login!');
        navigate('/');
      });
  }, [ApiGet, config, navigate]);
  function randonColor(op = 1) {
    let r = Math.random() * (255 - 50) + 50;
    let g = Math.random() * (255 - 150) + 150;
    let b = Math.random() * (255 - 120) + 120;
    return `rgba(${r}, ${g}, ${b}, ${op})`;
  }
  for (let i = 0; i < operations.length; i++) {
    let categoryName;
    let type;
    let categorySum = 0;
    categoryName = operations[i].category;
    type = operations[i].type;
    for (let j = 0; j < operations.length; j++) {
      if (operations[j].category === categoryName && operations[j].type === type) {
        categorySum += operations[j].value;
      }
    }
    const findCategoryInterIn = interIn.find(
      (category) => category[0].label === categoryName
    );
    const findCategoryInterOut = interOut.find(
      (category) => category[0].label === categoryName
    );
    if (operations[i].type === 'input') {
      if (findCategoryInterIn) continue;
      interIn.push([
        {
          type: 'input',
          label: categoryName,
          value: categorySum,
        },
      ]);
    } else {
      if (findCategoryInterOut) continue;
      interOut.push([
        {
          type: 'output',
          label: categoryName,
          value: categorySum,
        },
      ]);
    }
  }
  interIn.forEach((item) => {
    dataInput.labels.push(item[0].label);
    dataInput.datasets[0].data.push(item[0].value);
    dataInput.datasets[0].backgroundColor.push(randonColor());
    dataInput.datasets[0].borderColor.push('#8C11BE');
  });
  interOut.forEach((item) => {
    dataOutput.labels.push(item[0].label);
    dataOutput.datasets[0].data.push(item[0].value);
    dataOutput.datasets[0].backgroundColor.push(randonColor());
    dataOutput.datasets[0].borderColor.push('#8C11BE');
  });
  return (
    <Page>
      <Content>
        <BackArrow onClick={() => navigate('/wallet')}>
          <IoMdArrowRoundBack color={'#ffffff'} fontSize='2.5em' />
        </BackArrow>
        <h1>Seus gráficos</h1>
        <ChartContent>
          <ChartTest chartData={dataInput} options={setup} />
        </ChartContent>
        <ChartContent>
          <ChartTest chartData={dataOutput} options={setup} />
        </ChartContent>
      </Content>
    </Page>
  );
}
const ChartContent = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    
`;
const Page = styled.div`
    background: #8c11be;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
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
    font-size: 26px;
    line-height: 31px;
    margin-top: 60px;
}
`;
const BackArrow = styled.div`
    position: relative;
    top: 20px;
    left: -45%;
`;