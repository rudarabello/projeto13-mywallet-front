import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from "../contexts/Context"

export default function LogoutButton() {
    const API = `https://back-project-mywallet-ruda.herokuapp.com/logout`;
    const { data } = useContext(Context);
    const navigate = useNavigate();
    const config = { headers: { Authorization: `Bearer ${data.token}` } };
        const promise = axios.delete(API, config);
        promise.then(res => {
            navigate("/");
            alert("Logout feito com Sucesso!")
        }).catch(err => {
            console.log(err);
        })
    return (
        <></>
    );
}