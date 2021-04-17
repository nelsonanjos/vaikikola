import React, { useState } from "react";

import api from "../../Services/Api";

import "../../Assets/Style/style-login.css";


export default function Login(){

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();


    async function handleAcesso(e){
        e.preventDefault();
        const autenticacao = await api.post('/login', { email: email, senha: senha });
        
        const { pessoa, acesso } = autenticacao.data;
        console.log(acesso);
        
        if( acesso ){
            window.location.href = "/home";
            // return autenticacao.data.login;
        } else {
            alert(
                `Email ou senha inválidos!\nPor favor tente novamente.`
            )
        }        
    }
    
    return(
        <>
        <div className="login">
        <div className="container">
            <div className="wrapper">
                <div className="title bg-primary"><span>( : | Vai Ki Kola | : )</span></div>

                <form>
                    <div className="row">
                        <i className="fas fa-user bg-primary"></i>
                        <input 
                            type="text" 
                            placeholder="Email" 
                            onChange={e => setEmail(e.target.value)}
                            required />
                    </div>
                    <div className="row">
                        <i className="fas fa-lock bg-primary"></i>
                        <input 
                            type="password" 
                            placeholder="Senha"
                            onChange={e => setSenha(e.target.value)}
                            required />
                    </div>
                    <div className="row button">
                        <button 
                            className="btn btn-primary"
                            onClick={e => handleAcesso(e)}>
                            <span>Acessar</span>
                        </button>
                    </div>
                    <div className="signup-link">Ainda não é membro? <a href="#">Cadastre-se agora</a></div>
                </form>
            </div>
        </div>
        </div>
        </>
    )
}