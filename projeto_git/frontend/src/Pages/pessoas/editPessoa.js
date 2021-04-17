import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import '../../Assets/Style/style.css';

import Header from "../../Components/header";
import api from "../../Services/Api";

export default function EditPessoa(){
    
    let id = useRouteMatch().params.id;
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [telefone, setTelefone] = useState();
    const [senha, setSenha] = useState();
    const [grupo, setGrupo] = useState();

    useEffect(()=>{
        async function getPessoaById(){
            const pessoaById = await api.get('/pessoas/byId/'+id);

            setNome(pessoaById.data.nome);
            setEmail(pessoaById.data.email);
            setTelefone(pessoaById.data.telefone);
            setSenha(pessoaById.data.senha);
            setGrupo(pessoaById.data.grupo);
        }
        getPessoaById();
    },[]);

    function handleEditPessoa(){
        api.post('/pessoas/edit/'+id, {nome, email, telefone, senha, grupo});
    }

    return (
        <>
        <Header />  
        <div className="card form-new-pessoa">
            <div className="card-header ">
                Atualizar Pessoa
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label htmlFor="inputNome" className="label-pessoa">Nome</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="nome" 
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="inputEmail" className="label-pessoa">E-mail</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="inputTelefone" className="label-pessoa">Telefone</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="telefone" 
                        value={telefone}
                        onChange={e => setTelefone(e.target.value)}
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="inputTelefone" className="label-pessoa">Senha</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="senha" 
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="inputGrupo" className="label-pessoa">Grupo</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="grupo" 
                        value={grupo}
                        onChange={e => setGrupo(e.target.value)}
                    ></input>
                </div>
                <button 
                    type="button"
                    className="btn btn-outline-success btn-form" 
                    onClick={e => handleEditPessoa()}>
                    Atualizar pessoa
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