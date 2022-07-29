import { useNavigate } from "react-router-dom";
import { useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import Context from "../contexts/Context";
import axios from "axios";
import { useState } from "react";
import { IoMdArrowRoundBack } from 'react-icons/io';

const SubCategorysOut = () => {
    const [subCategoryOut, setSubCategoryOutToAPI] = useState("");
    const [categoryOutFromAPI, setCategoryOutFromAPI] = useState([]);
    const [categoryOutToAPI, setCategoryOutToAPI] = useState("");
    const navigate = useNavigate();
    const { data } = useContext(Context);
    const [subCategorysFromAPI, setSubCategorysFromAPI] = useState([]);
    const APIGet1 = "https://back-project-mywallet-ruda.herokuapp.com/chart-out";
    const APIPost = "https://back-project-mywallet-ruda.herokuapp.com/chart-out-sub";
    const APIGet2 = "https://back-project-mywallet-ruda.herokuapp.com/chart-out-sub";
    const body = {
        categoryOut: categoryOutToAPI,
        subCategoryOut: subCategoryOut
    };
    function handleSubmit(e) {
        e.preventDefault();
        const config = { headers: { Authorization: `Bearer ${data.token}` } };
        const promise = axios.post(APIPost, body, config);
        promise.then(() => {
            alert("Registrado com sucesso!");
            navigate("/category");
        });
        promise.catch((err) => {
            alert(err);
            navigate("/");
        });
    }
    const tempAxiosFunction = useRef();
    const axiosFunction = () => {
        const config = { headers: { Authorization: `Bearer ${data.token}` } };
        const promise = axios.get(APIGet2, config);
        promise.then(response => setSubCategorysFromAPI(response.data));
        promise.catch((err) => {
            alert(err);
            navigate("/");
        });
    }
    tempAxiosFunction.current = axiosFunction;
    useEffect(() => {
        tempAxiosFunction.current();
    }, [subCategorysFromAPI]);
    const tempAxiosFunction2 = useRef();
    const axiosFunction2 = () => {
        const config = { headers: { Authorization: `Bearer ${data.token}` } };
        const promise = axios.get(APIGet1, config);
        promise.then(response => setCategoryOutFromAPI(response.data));
        promise.catch((err) => {
            alert(err);
            navigate("/");
        });
    }
    tempAxiosFunction2.current = axiosFunction2;
    useEffect(() => {
        tempAxiosFunction2.current();
    }, [categoryOutFromAPI]);
    const [isDisable, setIsDisable] = useState(true);
    useEffect(() => {
        if (subCategoryOut.length && categoryOutToAPI.length > 0) {
            setIsDisable(false);
        } else {
            setIsDisable(true);
        }
        console.log(subCategorysFromAPI)
        console.log(subCategorysFromAPI)
        console.log(subCategorysFromAPI)
        console.log(subCategorysFromAPI)
    }, [subCategoryOut, categoryOutToAPI]);
    return (
        <Page>
            <BackArrow onClick={() => navigate('/category/output')}>
                <IoMdArrowRoundBack color={'#ffffff'} fontSize="2.5em" />
            </BackArrow>
            <Content>
                <h1>Suas categorias e</h1>
                <h1>sub-categorias</h1>
                <TransitionArea>
                    <Description>
                        {subCategorysFromAPI.length === 0 ?
                            <MessageSub>Não há registros de subcategorias ainda!</MessageSub>
                            : subCategorysFromAPI.map((e) => {
                                return (
                                    e.map((i, index) => {
                                        return (
                                            <>
                                                <Category key={index}>{i.descriptionCategory}</Category>
                                                <SubCategory key={index + 1}>{i.subCategoryOut}</SubCategory>
                                            </>
                                        )
                                    }))
                            })}
                    </Description>
                </TransitionArea>
                <select onClick={(e) => setCategoryOutToAPI(e.target.value)}>
                    {categoryOutFromAPI.map((e) => {
                        return (
                            <option
                                key={e._id} value={e.descriptionCategory}>
                                {e.descriptionCategory}
                            </option>)
                    })}
                </select >
                <form onSubmit={handleSubmit}>
                    <input type="text" max="14" required placeholder="Nova sub categoria" onChange={
                        (e) => setSubCategoryOutToAPI(e.target.value)} />
                    <button disabled={isDisable} type="submit">Atualizar</button>
                </form>
            </Content>
        </Page>
    );
};

export default SubCategorysOut

const Category = styled.div`
font-family: 'Raleway';
font-weight: 400;
font-size: 16px;
line-height: 23px;
padding-left: 10px;
color: #000000;
`;
const SubCategory = styled.div`
font-family: 'Raleway';
font-weight: 400;
font-size: 16px;
line-height: 23px;
padding-left: 35px;
color: #000000;
`;

const MessageSub = styled.div`
display: flex;
flex-direction: column;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 23px;
text-align: center;
width: 100%;
color: #868686;
`;

const Description = styled.div`
background: #FFFFFF;
width: 100%;
padding-top: 10px;
overflow-x: hidden;
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
    min-height: 40px;
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
