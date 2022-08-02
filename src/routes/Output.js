import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import Context from "../contexts/Context";
import axios from "axios";
import { useState } from "react";
import { IoMdArrowRoundBack } from 'react-icons/io';

export default function Output() {
    const navigate = useNavigate();
    const { data } = useContext(Context);
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const APIPost = "https://back-project-mywallet-ruda.herokuapp.com/wallet";
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState("");
    const [categorysFromApi, setCategorysFromApi] = useState([]);
    const tempAxiosFunction = useRef();
    const ApiGet1 = "https://back-project-mywallet-ruda.herokuapp.com/chart-out";
    const APIGet2 = "https://back-project-mywallet-ruda.herokuapp.com/chart-out-sub";
    const [subCategorysFromAPI, setSubCategorysFromAPI] = useState([]);
    const [subCategorysRender, setSubCategorysRender] = useState([]);
    const axiosFunction = () => {
        const config = { headers: { Authorization: `Bearer ${data.token}` } };
        const promise = axios.get(ApiGet1, config);
        promise.then(response => setCategorysFromApi(response.data));
        promise.catch((err) => {
            alert(err);
            navigate("/");
        });
    }
    tempAxiosFunction.current = axiosFunction;
    useEffect(() => {
        tempAxiosFunction.current();
    }, [categorysFromApi]);
    const body = {
        type: "output",
        value: value * -1,
        description: description,
        category: category,
        subCategory: subCategory
    };
    function handleSubmit(e) {
        e.preventDefault();
        const config = { headers: { Authorization: `Bearer ${data.token}` } };
        const promise = axios.post(APIPost, body, config);
        promise.then(() => {
            alert("Registrado com sucesso!");
            navigate("/wallet");
        });
        promise.catch((err) => {
            alert(err);
            navigate("/");
        });
    };
    useEffect(() => {
        const config = { headers: { Authorization: `Bearer ${data.token}` } };
        const promise = axios.get(APIGet2, config);
        promise.then(response => Goto(response.data));
        promise.catch((err) => { alert(err); navigate("/wallet"); });
    }, [category]);
    function Goto(data) {
        setSubCategorysFromAPI(data);
        for (let index = 0; index < subCategorysFromAPI.length; index++) {
            const element = subCategorysFromAPI[index];
            for (let index = 0; index < element.length; index++) {
                const subElement = element[index];
                const { descriptionCategory } = subElement;
                if (descriptionCategory === category) {
                    setSubCategorysRender(element);
                }
            }
        }
    }
    return (
        <Page>
            <BackArrow onClick={() => navigate('/wallet')}>
                <IoMdArrowRoundBack color={'#ffffff'} fontSize="2.5em" />
            </BackArrow>
            <Content>
                <h1>Nova Saída</h1>
                <form onSubmit={handleSubmit}>
                    <input type="number" step=".01" required placeholder="Valor" onChange={(e) => setValue(e.target.value)} />
                    <input type="text" max="14" required placeholder="Descrição" onChange={(e) => setDescription(e.target.value)} />
                    <select onClick={(e) => setCategory(e.target.value)}>
                        {categorysFromApi.map((e) => {
                            return (
                                <option
                                    key={e._id} value={e.descriptionCategory}>{e.descriptionCategory}
                                </option>)
                        })}
                    </select >
                    {/* <select onClick={(e) => setSubCategory(e.target.value)}>
                        {subCategorysRender.map((e) => {
                            return (
                                <option key={e.id} value={e.subCategoryOut}>{e.subCategoryOut}</option>)
                        })}
                    </select> */}
                    <button type="submit">Salvar Saída</button>
                </form>
            </Content>
        </Page>
    );
};

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
height: 100px;
border: none;
background: #A328D6;
border-radius: 8px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
margin-top: 20px;
:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px rgba(999, 999, 999, 0.9);
    }
};
select,input {
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
}
`;
const BackArrow = styled.div`
    position: fixed;
    top: 20px;
    left: 38px;
`;


