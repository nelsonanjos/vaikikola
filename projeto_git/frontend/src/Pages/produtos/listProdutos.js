import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import '../../Assets/Style/style.css';

import Header from "../../Components/header";
import api from "../../Services/Api";


export default function ListProdutos(){


    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        
        async function getPessoas(){
            const response = await api.get('/produtos');
            setProdutos(response.data);
        }

        getPessoas();
    }, []);

    return (
        <>
        <Header />
        <h5 className="card-title">Produtos Cadastrados</h5>
        <Link to="/produtos/new" className="btn btn-outline-info btn-acoes">Novo Produto</Link>
                        <div className="card-deck">
                            {produtos.length ? 
                                produtos.map((produto, key) => {
                                    return(
                                        <div className="card list-produtos">
                                            <div className="card-header">
                                                {produto.proprietario}
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">{produto.nome}</h5>
                                                <p className="card-text">{produto.descricao}</p>
                                                <Link className='btn btn-outline-danger btn-acao-produto' to={'/produtos/remove/'+produto._id}>Remover</Link>
                                                <Link className='btn btn-outline-primary btn-acao-produto' to={'/produtos/edit/'+produto._id}>Editar</Link>
                                            </div>
                                            <div>
                                                <div className="form-check form-switch check-publico">
                                                    <label className="form-check-label" for="flexSwitchCheckChecked"
                                                    >Público</label>
                                                    <input 
                                                        className="input-publico" 
                                                        type="text"
                                                        value={produto.publico}
                                                        disabled
                                                    />
                                                </div>
                                            </div>
                                        </div>            
                    )
                }) : <h5>Não há cadastros.</h5>}
                </div>
            
        </>
    );
}