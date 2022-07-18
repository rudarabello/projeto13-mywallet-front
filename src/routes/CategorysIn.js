import { useNavigate } from "react-router-dom";
import { useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import Context from "../contexts/Context";
import axios from "axios";
import { useState } from "react";
import { IoMdArrowRoundBack } from 'react-icons/io';
import TransactionItem from "../components/TransactionItem";


export default function CategorysIn() {
    const navigate = useNavigate();
    const { data } = useContext(Context);
    const [description, setDescription] = useState("");
    const APIPost = "https://back-project-mywallet-ruda.herokuapp.com/chart-in";
    const body = {
        description: description
    };
    function handleSubmit(e) {
        e.preventDefault();
        const config = {
            headers: {
                Authorization: `Bearer ${data.token}`
            }
        };
        const promise = axios.post(APIPost, body, config
        );
        promise.then(() => {
            alert("Registrado com sucesso!");
            navigate("/wallet");
        });
        promise.catch((err) => {
            alert(err);
            navigate("/");
        });
    }
    const [categorys, setCategorys] = useState("");
    const tempAxiosFunction = useRef();
    const ApiGet = `https://back-project-mywallet-ruda.herokuapp.com/chart-in`;
    const axiosFunction = () => {
        const config = { headers: { Authorization: `Bearer ${data.token}` } };
        const promise = axios.get(ApiGet, config);
        promise.then(response => setCategorys(response.data));
        promise.catch(err => {console.log(err)} );
    }
    tempAxiosFunction.current = axiosFunction;
    useEffect(() => {
        tempAxiosFunction.current();
    }, []);
    return (
        <Page>
            <BackArrow onClick={() => navigate('/category')}>
                <IoMdArrowRoundBack color={'#ffffff'} fontSize="2.5em" />
            </BackArrow>
            <Content>
                <h1>Suas categorias</h1>
                <TransitionArea>
                    <Description>
                        {categorys.length === 0 ? <Message>Não há registros categorias ainda!</Message>
                            : categorys.map((e, index) => {
                                return (<TransactionItem key={index} date={e.date} description={e.description} />);
                            })}
                    </Description>
                </TransitionArea>
                <form onSubmit={handleSubmit}>
                    <input type="text" max="14" required placeholder="Nova categoria" onChange={
                        (e) => setDescription(e.target.value)} />
                    <button type="submit">Atualizar</button>
                </form>
            </Content>
        </Page>
    );
};

const Message = styled.div`
display: flex;
flex-direction: column;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
text-align: center;
width: 100%;
color: #868686;

`;

const Description = styled.div`
background: #FFFFFF;
width: 100%;
padding-top: 10px;
`;

const TransitionArea = styled.div`
background-color: #FFFFFF;
width: 100%;
min-width: 260px;
max-width: 326px;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 5%;
min-height: 246px;
`;

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
    margin-bottom: 15px;
};
`;
const BackArrow = styled.div`
    position: fixed;
    top: 20px;
    left: 38px;
`;
