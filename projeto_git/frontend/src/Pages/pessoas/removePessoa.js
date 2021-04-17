import { useRouteMatch } from 'react-router';

import api from "../../Services/Api";



export default function RemovePessoa(){
    try {
        let id = useRouteMatch().params.id;
        const request = api.delete('/pessoas/remove/'+id);
        
    } catch (error) {
        console.log(error);   
    }
}