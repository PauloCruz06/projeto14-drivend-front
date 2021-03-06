import React,{ useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import dotenv from 'dotenv';

import { Loaderspinner } from "./LoaderSpinner";

export default function SignUp() {
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [photo, setPhoto]=useState("");
    dotenv.config();

    function submitData(event) {
        event.preventDefault();
        setLoading(true);

        let postObject=
            {
                email ,
                password,
                photo,
                name,
                passwordConfirmation
            };
        
        
        const promise=axios.post(`${process.env.REACT_APP_URL_API}/cadastrar`, postObject);

        promise.then(() => {
            navigate("/login");
        }).catch(() => {
            alert("Não foi possível efetuar cadastro");
            setLoading(false);
        });
    }

    return (
    <>
      <Container>
        <Logo>DriVenD</Logo>
        <Form onSubmit={submitData}>
            <input type="email" placeholder="e-mail" onChange={(e) => setEmail(e.target.value)} value={email}/>
            <input type="text" id="nome" placeholder="nome" onChange={(e) => setName(e.target.value)} value={name} />
            <input type="text" id="link" placeholder="foto" onChange={(e) => setPhoto(e.target.value)} value={photo} />
            <input type="password" id="senha" placeholder="senha" onChange={(e) => setPassword(e.target.value)} value={password}/>
            <input type="password" id="senhaconfirm" placeholder="digite novamente sua senha" onChange={(e) => setPasswordConfirmation(e.target.value)} value={passwordConfirmation} />
            {loading ?
                <div> <Loaderspinner /></div>
                :
                <button type="submit" >Cadastrar</button>
            }
        </Form>
        <Link to='/login'>Já tem uma conta? Faça login!</Link>
      </Container>
    </>  
  );
}

const Logo=styled.div`
    font-family: "jsmath-cmbx10";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 44px;
    color: white;
`
const Container=styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 68px;
    
    font-family: 'Lexend Deca', sans-serif;
    img{
        width: 180px;
        height: 178px;
        margin-bottom: 35px;
    }
    a{
        margin-top: 25px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration:none;
        color: white;
    }
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-right: 36px;
    margin-left: 36px;
    margin-top: 20px;
    
    input {
        height: 45px;
        margin-right: 36px;
        margin-left: 36px;
        min-width: 150px;
        margin-bottom: 6px;
        border-radius: 5px;
        border: 1px solid #D4D4D4; 
        padding-left:11px ;
        box-sizing: border-box;
    }
    input::placeholder {
        color: grey;
        font-size: 20px;
        font-style: italic;
        box-sizing: border-box;
    }
    button, div {
        min-width: 150px;
        height: 45px;
        margin-right: 36px;
        margin-left: 36px;
        text-align: center;
        background: white;
        color: #F25353;
        font-size: 21px;
        border: none;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Roboto";
        a{
            text-decoration: none;
        }
        
    }
`