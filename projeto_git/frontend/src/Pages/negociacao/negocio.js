import React, { useEffect, useState } from "react";

import api from "../../Services/Api";

import "../../Assets/Style/style.css";
import {  useRouteMatch } from "react-router";
import Header from "../../Components/header";


export default function Negociacao(){
    
    let idSeuProduto = useRouteMatch().params.id;
    let idProdutoPubli = useRouteMatch().params.id;
    const [nome, setNome] = useState();
    const [descricao, setDescricao] = useState();
    const [estado, setEstado] = useState();
    const [proprietario, setProprietario] = useState();
    const [produtos, setProdutos] = useState([]);
    
    useEffect(()=>{
        async function getProdutoById(){
            const produtoById = await api.get('/produtos/byId/'+idSeuProduto);
            
            const { nome, descricao, estado, proprietario } = produtoById.data;
            
            setNome(nome);
            setDescricao(descricao);
            setEstado(estado);
            setProprietario(proprietario);
        }

        async function getPessoas(){
            const response = await api.get('/produtos');
            setProdutos(response.data);
        }
        
        getPessoas();
        getProdutoById();
    },[]);

    
    function handleTroca(var_idProdutoPubli) {
        try {
            api.delete('produtos/remove/'+idSeuProduto);  
            api.delete('produtos/remove/'+var_idProdutoPubli); 
        } catch (error) {
        
        }

        window.location.href = "/home";
    }
    
    
    return(
        <>
            <Header/>
            <div className="seu-produto">
            <h1 className="display-5">Seu produto</h1>
                <div className="card-deck">
                    <div className="card list-produtos">
                        <div className="card-header">
                            {proprietario}
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{nome}</h5>
                            <p className="card-text">{descricao}</p>
                        </div>
                    </div>            
                </div>
            </div>
            <div className="produtos-publicos">
            <h1 className="display-5">Produtos públicos</h1>
                <div className="card-deck">
                    {produtos.length ? 
                        produtos.map((produto, key) => {
                            if(produto._id !== idSeuProduto)
                            return(<div className="card list-produtos">
                                <div className="card-header">
                                    {produto.proprietario}
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{produto.nome}</h5>
                                    <p className="card-text">{produto.descricao}</p>
                                    <button 
                                        className="btn btn-outline-primary"
                                        onClick={e => handleTroca(produto._id)}>
                                        Realizar troca
                                    </button>
                                </div>
                            </div>)
                        }) : <h1>Não há produtos para negociar!</h1>
                    }
                </div>
            </div>
        </>
    )
}