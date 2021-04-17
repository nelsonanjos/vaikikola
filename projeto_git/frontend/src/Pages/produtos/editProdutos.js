import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import '../../Assets/Style/style.css';

import Header from "../../Components/header";
import api from "../../Services/Api";


export default function EditProduto(){
    
    let id = useRouteMatch().params.id;
    const [nome, setNome] = useState();
    const [descricao, setDescricao] = useState();
    const [estado, setEstado] = useState();
    const [proprietario, setProprietario] = useState();
    const [publico, setPublico] = useState();
    
    useEffect(()=>{
        async function getProdutoById(){
            const produtoById = await api.get('/produtos/byId/'+id);

            const { nome, descricao, estado, proprietario, publico } = produtoById.data;

            setNome(nome);
            setDescricao(descricao);
            setEstado(estado);
            setProprietario(proprietario);
            setPublico(publico);
        }
        getProdutoById();
    },[]);

    function handleEditProduto(){

        api.post('/produtos/edit/'+id, {nome, descricao, estado, proprietario, publico});
    }

    return (
        <>  
        <Header />
        <div className="card form-new-produto">
            <div className="card-header ">
                Atualizar Produto
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label className="label-produto" htmlFor="inputNome">Nome</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="nome" 
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    ></input>
                </div>
                <div className="form-group">
                    <label className="label-produto" htmlFor="inputDescricao">Descrição</label>
                    <textarea 
                        className="form-control" 
                        id="descricao" 
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label className="label-produto" htmlFor="inputEstado">Estado</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="estado" 
                        value={estado}
                        onChange={e => setEstado(e.target.value)}
                    ></input>
                </div>
                <div className="form-group">
                    <label className="label-produto" htmlFor="inputProprietario">Proprietário</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="proprietario" 
                        value={proprietario}
                        onChange={e => setProprietario(e.target.value)}
                    ></input>
                </div>
                <div className="form-group">
                    <label className="label-produto" htmlFor="inputPublico">Pode deixar publico?</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="publico" 
                        value={publico}
                        onChange={e => setPublico(e.target.value)}
                    ></input>
                </div>
                <button 
                    type="button"
                    className="btn btn-outline-success btn-form" 
                    onClick={e => handleEditProduto()}>
                    Atualizar produto
                </button>
                <Link 
                    to="/produtos"
                    className="btn btn-outline-danger btn-form" 
                > Voltar para Lista Produtos
                </Link>
            </div>
        </div>
        </>
    );
}