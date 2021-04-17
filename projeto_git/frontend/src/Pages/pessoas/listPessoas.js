import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import '../../Assets/Style/style.css';

import Header from "../../Components/header";
import api from "../../Services/Api";


export default function ListPessoas() {

    const [pessoas, setPessoas] = useState([]);

    useEffect(() => {
        
        async function getPessoas(){
            const response = await api.get('/pessoas');
            setPessoas(response.data);
        }

        getPessoas();
    }, []);
    

    return( 
        <>
        <Header />
        <h5 className="card-title">Pessoas Cadastradas</h5>
        <Link to="/pessoas/new" className="btn btn-outline-info btn-acoes">Nova Pessoa</Link>   
        {pessoas.length ?     
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                {pessoas.map((pessoa, k) => {
                    return(
                        <tr key={k}>
                            <td>{k+1}</td>
                            <td>{pessoa.nome}</td>
                            <td>{pessoa.email}</td>
                            <td>{pessoa.telefone}</td>
                            <td><Link 
                                to={"/pessoas/edit/"+pessoa._id}
                                className="btn btn-outline-primary btn-acoes">
                                Editar
                            </Link></td>
                            <td><Link 
                                to={"/pessoas/remove/"+pessoa._id} 
                                className="btn btn-outline-danger btn-acoes">
                                Remover
                            </Link></td>    
                        </tr>
                    )
                })}
            </tbody>
        </table> : <h5>Não há cadastro!</h5>}
        </>
    );
}
