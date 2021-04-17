import React, { useState } from "react";
import { Link } from "react-router-dom";

import '../../Assets/Style/style.css';

import Header from "../../Components/header";
import api from "../../Services/Api";


export default function NewProduto(){

    const [nome, setNome] = useState();
    const [descricao, setDescricao] = useState();
    const [estado, setEstado] = useState();
    const [proprietario, setProprietario] = useState();

    
    async function handleNewProduto(){
        const request = await api.post('/produtos/new', {
            nome: nome,
            descricao: descricao,
            estado: estado,
            proprietario: proprietario,
            publico: "Não",
        });
        console.log(request);
    }

    return (
        <>  
        <Header />
        <div className="card form-new-produto">
            <div className="card-header ">
                Nova Produto
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label htmlFor="inputNome">Nome</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="nome" 
                        placeholder="Digite seu nome" 
                        onChange={e => setNome(e.target.value)}
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="inputEmail">Descricao</label>
                    <textarea 
                        className="form-control" 
                        id="descricao" 
                        placeholder="Este produto está na família a 10 anos, no mercado..."
                        onChange={e => setDescricao(e.target.value)}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="inputTelefone">Estado</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="estado" 
                        placeholder="Ex: Novo, usado..."
                        onChange={e => setEstado(e.target.value)}
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="inputTelefone">Proprietário</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="proprietario" 
                        placeholder="Ex: Fulano"
                        onChange={e => setProprietario(e.target.value)}
                    ></input>
                </div>
                <button 
                    type="button"
                    className="btn btn-outline-success btn-form" 
                    onClick={e => handleNewProduto()}
                    >
                    Adicionar produto
                </button>
                <Link 
                    to="/produtos"
                    className="btn btn-outline-danger btn-form"
                > Voltar para Produtos
                </Link>
            </div>
        </div>
        </>
    );
}