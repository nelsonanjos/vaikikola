import React from 'react';
import { Redirect, useRouteMatch } from 'react-router';


import api from '../../Services/Api';


export default function RemoveProduto(){
    let id = useRouteMatch().params.id;
    try {
        const request = api.delete('/produtos/remove/'+id);
        alert(request.message);
    } catch (error) {
        
    }

    return (
        <>
            <Redirect to='/produtos' />
        </>
    )
}