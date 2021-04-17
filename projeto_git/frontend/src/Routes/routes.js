import React from 'react';
import { 
  BrowserRouter,  
  Route,
  Switch,
} from 'react-router-dom';

import Login from '../Pages/login/login';

import ListProdutosPubli from "../Pages/home/listProdutosPubli";

import ListPessoas from '../Pages/pessoas/listPessoas';
import NewPessoa from '../Pages/pessoas/newPessoa';
import EditPessoa from '../Pages/pessoas/editPessoa';
import RemovePessoa from '../Pages/pessoas/removePessoa';

import ListProdutos from '../Pages/produtos/listProdutos';
import NewProduto from '../Pages/produtos/newProduto';
import EditProduto from '../Pages/produtos/editProdutos';
import RemoveProduto from '../Pages/produtos/removeProdutos';

import E404 from "../Pages/Error/e404";
import Negociacao from '../Pages/negociacao/negocio';

export default function Routes() {

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Login} />

                <Route path="/home" component={ListProdutosPubli} />

                <Route path="/pessoas" exact={true} component={ListPessoas} />
                <Route path="/pessoas/new" component={NewPessoa} />
                <Route path="/pessoas/edit/:id" component={EditPessoa} />
                <Route path="/pessoas/remove/:id" component={RemovePessoa} />

                <Route path="/produtos" exact={true} component={ListProdutos} />
                <Route path="/produtos/new" component={NewProduto} />
                <Route path="/produtos/edit/:id" component={EditProduto} />
                <Route path="/produtos/remove/:id" component={RemoveProduto} /> 
                <Route path="/produtos/remove/:id1/:id2" component={RemoveProduto} /> 

                <Route path="/produtos/bargain/:id" component={Negociacao} />
                
                <Route path="*" component={E404} />
            </Switch>
        </BrowserRouter>
    );
}