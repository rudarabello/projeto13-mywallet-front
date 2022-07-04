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
    promise.then(() => {
        alert("Logout feito com Sucesso!")
        navigate("/");
    }
    ).catch(err => {
        alert(err)
        console.log(err);
    })
    return (
        <></>
    );
}