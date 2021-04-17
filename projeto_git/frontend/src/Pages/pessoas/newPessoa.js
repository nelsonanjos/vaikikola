import React, { useState } from "react";
import { Link } from "react-router-dom";

import '../../Assets/Style/style.css';

import Header from "../../Components/header";
import api from "../../Services/Api";


export default function NewPessoa(){

    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [telefone, setTelefone] = useState();
    const [senha, setSenha] = useState();
    const [grupo, setGrupo] = useState();

    
    async function handleNewPessoa(){
        try {
            const request = await api.post('/pessoas/new', {
                nome: nome,
                email: email,
                telefone: telefone,
                senha: senha,
                grupo: grupo,
            });
            
            alert(request.data.message);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>  
        <Header />
        <div className="card form-new-pessoa">
            <div className="card-header ">
                Nova Pessoa
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label className="label-pessoa" htmlFor="inputNome">Nome</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="nome" 
                        placeholder="Digite seu nome" 
                        onChange={e => setNome(e.target.value)}
                    ></input>
                </div>
                <div className="form-group">
                    <label className="label-pessoa" htmlFor="inputEmail">E-mail</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="nome@exemplo.com"
                        onChange={e => setEmail(e.target.value)}
                    ></input>
                </div>
                <div className="form-group">
                    <label className="label-pessoa" htmlFor="inputTelefone">Telefone</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="telefone" 
                        placeholder="Digite seu telefone"
                        onChange={e => setTelefone(e.target.value)}
                    ></input>
                </div>
                <div className="form-group">
                    <label className="label-pessoa" htmlFor="inputSenha">Senha</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="senha" 
                        placeholder="Digite a senha"
                        onChange={e => setSenha(e.target.value)}
                    ></input>
                </div>
                <div className="form-group">
                    <label className="label-pessoa" htmlFor="inputGrupo">Grupo</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="grupo" 
                        placeholder="Digite o grupo"
                        onChange={e => setGrupo(e.target.value)}
                    ></input>
                </div>
                <button 
                    type="button"
                    className="btn btn-outline-success btn-form" 
                    onClick={e => handleNewPessoa()}
                    >
                    Adicionar pessoa
                </button>
                <Link 
                    to="/pessoas"
                    className="btn btn-outline-danger btn-form"
                > Voltar para Lista Pessoas
                </Link>
            </div>
        </div>
        </>
    );
}