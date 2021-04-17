import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../Components/header";
import "../../Assets/Style/style.css";
import api from "../../Services/Api";

export default function ListProdutosPubli(){

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
        <div className="card-deck"> {
        produtos.length ? 
                produtos.map(produto => {
                    if(produto.publico === "Sim")
                    return(
                        <div className="card list-produtos">
                            <div className="card-header">
                                {produto.proprietario}
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{produto.nome}</h5>
                                <p className="card-text">{produto.descricao}</p>
                                <Link 
                                    className='btn btn-outline-success btn-acao-produto' 
                                    to={'/produtos/bargain/'+produto._id}>
                                    Negociar
                                </Link>
                            </div>
                        </div>            
                    )           
                }) : <h5>Não há cadastros.</h5>
        } </div>
        </>
    );
}