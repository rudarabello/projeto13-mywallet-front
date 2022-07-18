import { useNavigate } from "react-router-dom";
import { useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import Context from "../contexts/Context";
import axios from "axios";
import { useState } from "react";
import { IoMdArrowRoundBack } from 'react-icons/io';
import CategoryItemSecondary from "../components/CategoryItemSecondary";


const SubCategorysOut = () => {
    const navigate = useNavigate();
    const { data } = useContext(Context);
    const [categoryOut, setCategoryOut] = useState("");
    const [categoryOutAPI, setCategoryOutAPI] = useState("");
    const [subCategoryOut, setSubCategoryOut] = useState("");
    const APIGet = "https://back-project-mywallet-ruda.herokuapp.com/chart-out";
    const APIPost = "https://back-project-mywallet-ruda.herokuapp.com/chart-out-sub";
    const body = {
        categoryOut: categoryOut,
        subCategoryOut: subCategoryOut
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
            navigate("/category");
        });
        promise.catch((err) => {
            alert(err);
            navigate("/");
        });
    }
    const tempAxiosFunction2 = useRef();
    const axiosFunction2 = () => {
        const config = { headers: { Authorization: `Bearer ${data.token}` } };
        const promise = axios.get(APIGet, config);
        promise.then(response => setCategoryOutAPI(response.data));
        promise.catch((err) => {
            alert(err);
            navigate("/");
        });
    }
    tempAxiosFunction2.current = axiosFunction2;
    useEffect(() => {
        tempAxiosFunction2.current();
    }, [categoryOut]);


    const [subCategorys, setSubCategorys] = useState("");
    const tempAxiosFunction = useRef();
    const axiosFunction = () => {
        const config = { headers: { Authorization: `Bearer ${data.token}` } };
        const promise = axios.get(APIGet, config);
        promise.then(response => setSubCategorys(response.data));
        promise.catch((err) => {
            alert(err);
            navigate("/");
        });
    }
    tempAxiosFunction.current = axiosFunction;
    useEffect(() => {
        tempAxiosFunction.current();
    }, [subCategorys]);



    return (
        <Page>
            <BackArrow onClick={() => navigate('/category/saida')}>
                <IoMdArrowRoundBack color={'#ffffff'} fontSize="2.5em" />
            </BackArrow>
            <Content>
                <h1>Suas categorias e</h1>
                <h1>sub categorias</h1>
                <TransitionArea>
                    <Description>
                        <select onClick={(e) => setCategoryOut(e.target.value)}>
                            {categoryOutAPI.length === 0 ? <Message>Não há registros categorias ainda!</Message> :
                                categoryOutAPI.map((e) => {
                                    return (
                                        <option key={e._id} value={e.descriptionCategory}>{e.descriptionCategory}</option>)
                                })}
                        </select >
                        {subCategorys.length === 0 ? <MessageSub>Não há registros de subcategorias ainda!</MessageSub>
                            : subCategorys.map((e, index) => {
                                return (<CategoryItemSecondary key={index} description={e.descriptionCategory} />);
                            })}
                    </Description>
                </TransitionArea>
                <form onSubmit={handleSubmit}>
                    <input type="text" max="14" required placeholder="Nova sub categoria" onChange={
                        (e) => setSubCategoryOut(e.target.value)} />
                    <button type="submit">Atualizar</button>
                </form>
            </Content>
        </Page>
    );
};

export default SubCategorysOut

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
const MessageSub = styled.div`
display: flex;
flex-direction: column;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 23px;
text-align: end;
width: 100%;
color: #868686;

`;

const Description = styled.div`
background: #FFFFFF;
width: 100%;
padding-top: 10px;
select,input {
    background-color: #ffffff;
    color: #ADADAD;
    border: none;
    border-radius: 5px;
    margin-top: 18px;
    width: 100%;
    height: 40px;
}
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
    text-align: center;
    color: white;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 31px;
    margin-bottom: 15px;
};
`;
const BackArrow = styled.div`
    position: fixed;
    top: 20px;
    left: 38px;
`;
