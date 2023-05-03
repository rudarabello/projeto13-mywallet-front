import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoMdArrowRoundBack } from 'react-icons/io';


const Categorys = () => {
    const navigate = useNavigate();
    return (
        <Page>
            <Content>
            <BackArrow onClick={() => navigate('/wallet')}>
                <IoMdArrowRoundBack color={'#ffffff'} fontSize="2.5em" />
            </BackArrow>
            <button onClick={() => navigate('/category/input')}>Categorias de Entrada</button>
            <button onClick={() => navigate('/category/output')}>Categorias de Saída</button>
            </Content>
        </Page>
    );
};
export default Categorys

const Page = styled.div`
background: #8C11BE;
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Content = styled.div`
width: 70%;
max-height: 600px;
max-width: 260px;
display: flex;
flex-direction: column;
align-items: center;
button{
    width: 100%;
    height: 114px;
    margin-bottom: 10px;
    margin-top: 50px;
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
};
select, input{
    background-color: #ffffff;
    color: #ADADAD;
    border: none;
    border-radius: 5px;
    margin-top: 18px;
    width: 100%;
    height: 40px;
}
h1{
    width: 100%;
    text-align: start;
    color: white;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    margin-bottom: 50px;
};
`;
const BackArrow = styled.div`
    position: relative;
    top: 10px;
    left: -45%;
`;