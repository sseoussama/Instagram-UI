import axios from 'axios';
import {FETCH_USER} from './types';

export  const fetchUser=(token)=>
{

	return function(dispatch)
	{
		        
               const api = axios.create({
                         headers: {
                         'Authorization': token,
                         'Content-Type': 'application/json',
                      }
                     }); 
                    api.get("http://192.168.1.4:5000/api/users/profile").then(function(response)
                    {
                    	
                       
                       dispatch({type:FETCH_USER,payload:response.data.user});
                       return true; 
                        
                    }).catch(function(error)
                    {
                        
                           return error;
                    });

	} ;
}
