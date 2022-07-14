import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import Context from "../contexts/Context";
import axios from "axios";
import { useState } from "react";
import { IoMdArrowRoundBack } from 'react-icons/io';




export default function UsersPage() {
    const navigate = useNavigate();
    const { data } = useContext(Context);
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const API = "https://back-project-mywallet-ruda.herokuapp.com/wallet";
    const [category, setCategory] = useState()
    const [subCategory, setSubCategory] = useState()
    const [renderS, setRenderS] = useState([])
    function handleSubmit(e) {
        e.preventDefault();
        const config = {
            headers: {
                Authorization: `Bearer ${data.token}`
            }
        };
        const body = {
            type: "output",
            value: value * -1,
            description: description,
            category: category,
            subCategory: subCategory
        };
        const promise = axios.post(API, body, config
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
    const categoryFromAPI = [
        { id: 0, text: 'Escolha categoria' },
        { id: 1, text: 'Básico' },
        { id: 2, text: 'Saúde' },
        { id: 3, text: 'Estudos' },
        { id: 4, text: 'Automóvel' },
        { id: 5, text: 'Extras' },
        { id: 6, text: 'Serviços' },
        { id: 7, text: 'Dízimos/Ofertas' }
    ]
    const basico = [
        { id: 0, text: 'Escolha sub-categoria' },
        { id: 1, text: 'Alimentação' },
        { id: 2, text: 'Impostos' },
        { id: 3, text: 'CRQ' },
        { id: 4, text: 'Aluguel' },
        { id: 5, text: 'Energia elétrica' },
        { id: 6, text: 'Condomínio' },
        { id: 7, text: 'Celular' },
        { id: 8, text: 'Internet' },
        { id: 9, text: 'Manutenção' },
        { id: 10, text: 'Vestuário' },
        { id: 11, text: 'Cama/mesa/banho' },
        { id: 12, text: 'Cabeleireiro/Manicure' },
        { id: 13, text: 'Ajuste' },
        { id: 15, text: 'Poupança' },
    ]
    const saude = [
        { id: 0, text: 'Escolha sub-categoria' },
        { id: 1, text: 'Equipamentos' },
        { id: 2, text: 'Cosm/Perf/Drog' },
        { id: 3, text: 'Suplementos' },
        { id: 4, text: 'Bicicleta' },
        { id: 5, text: 'Academia' },
        { id: 6, text: 'Dentista' },
        { id: 7, text: 'Medicamentos' }
    ]
    useEffect(() => {
        if (category === 'Básico') {
            setRenderS(basico)
            
        }
        if (category === 'Saúde') {
            setRenderS(saude)
            
        }
    }, [category])
    return (
        <ContainerUsers>
            <ButtonsFromApi>
                <BackArrow onClick={() => navigate('/wallet')}>
                    <IoMdArrowRoundBack color={'#ffffff'} fontSize="2.5em" />
                </BackArrow>
                <h1>Nova Saída</h1>
                <form onSubmit={handleSubmit}>
                    <input type="number" placeholder="Valor" onChange={(e) => setValue(e.target.value)} />
                    <input type="text" placeholder="Descrição" onChange={(e) => setDescription(e.target.value)} />
                    <select onClick={(e) => setCategory(e.target.value)}>
                        {categoryFromAPI.map((category) => {
                            return (
                                <option key={category.id} value={category.text}>{category.text}</option>)
                        })}
                    </select >
                    <select onClick={(e) => setSubCategory(e.target.value)}>
                        {renderS.map((category) => {
                            return (
                                <option key={category.id} value={category.text}>{category.text}</option>)
                        })}
                    </select>
                    <FormButton type="submit">Salvar Saída</FormButton>
                </form>
            </ButtonsFromApi>
        </ContainerUsers>
    );
};

const ContainerUsers = styled.div`
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
const ButtonsFromApi = styled.div`
width: 70%;
max-width: 260px;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 25%;
margin-bottom: 40%;

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
    margin-bottom: 100px;
}
`;
const BackArrow = styled.div`
    position: fixed;
    top: 40px;
    left: 38px;
    `;


const FormButton = styled.button`
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
`;



