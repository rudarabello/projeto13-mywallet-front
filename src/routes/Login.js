import { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Context from "../contexts/Context";
import logo from "../assets/MyWallet.png";
import Loading from "../components/Loading";



export default function Login() {

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const localUser = localStorage.getItem("user");
    const navigate = useNavigate()
    const { setData } = useContext(Context);
    const URL = "https://back-project-mywallet-ruda.herokuapp.com/";
    const tempAxiosFunction = useRef();
    const axiosFunction = () => {
        if (localUser !== null) {
            const localUserParse = JSON.parse(localUser);
            setEmail(localUserParse.email);
            setPassword(localUserParse.password);
        }
    }
    tempAxiosFunction.current = axiosFunction;
    useEffect(() => {
        tempAxiosFunction.current();
    }, []);
    function handleLogin(e) {
        e.preventDefault();
        const user = {
            email,
            password
        }
        const promise = axios.post(URL, user);
        promise.then(response => GoTo(response.data));
        promise.catch(error => alert(error.response.data.message));
    }
    function GoTo(data) {
        setData(data);
        const user = { email, password };
        localStorage.removeItem("user");
        const userStrigify = JSON.stringify(user);
        localStorage.setItem("user", userStrigify);
        navigate('/wallet');
    };
    setTimeout(() => setLoading(true), 1000);
    return (
        <StyledLogin>
            {loading === true ?
                <Page>
                    <img src={logo} alt="Logo My Wallet" />
                    <Form onSubmit={handleLogin}>
                        <Input
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            value={email}
                            placeholder="E-mail"
                            type="email"
                            required
                            autoComplete="email"
                        />
                        <Input
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            value={password}
                            placeholder="Senha"
                            type="password"
                            required
                            autoComplete="password"
                        />
                        <FormButton type="submit">ENTRAR</FormButton>
                    </Form>
                    <Linkto>
                        <Link to="/sign-up">
                            <a href="https://vercel.com/rudarabello/projeto13-mywallet-front/signup">
                                Primeira vez? Cadastre-se!
                            </a>
                        </Link>
                    </Linkto>
                </Page> :
                <Loading />}
        </StyledLogin>
    )
};


const Linkto = styled.div`
text-decoration: none !important;
a{
    font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 18px;
text-decoration: none !important;
}
:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px rgba(999, 999, 999, 0.9);
    }
`;


const StyledLogin = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    a{
        margin-top: 8px;
        color: #FFFFFF;
        font-size: 14px;
        text-decoration: underline;
        font-family: "Roboto";
    }
    img{
        width: 100%;
        height: 100%;
        margin-bottom: 20px;
    }
`
const Page = styled.div`
display: flex;
flex-direction: column;
align-items: center;
max-width: 240px;
`;


const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
gap: 6px;
margin-bottom: 25px;
`;



const Input = styled.input`
width: 100%;
height: 45px;
background: white;
border: 1px solid #DBDBDB;
border-radius: 8px;
box-sizing: border-box;
padding: 11px;
margin-top: 20px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #7E7E7E;
`;

const FormButton = styled.button`
width: 100%;
height: 45px;
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