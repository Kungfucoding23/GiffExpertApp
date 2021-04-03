import {useState, useEffect} from 'react';
import { getGifs } from '../helpers/getGifs';
//este es un custom hook, funciona como un functional component 

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });
    useEffect(() => {
        getGifs(category)
            .then(imgs => {                
                    setState({
                        data: imgs,
                        loading: false
                    }); 
            })
    }, [category])
    return state; // {devuelve el objeto}
}
