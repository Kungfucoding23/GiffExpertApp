import React, {useState, useEffect} from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);
    
    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=KJYm7HX3CDWX39cn8b0AJKzwGZFDzKBG';
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url  // EL ? ES PARA PREGUNTAR QUE SI VIENEN LAS IMAGENS ENTONCES LAS UTILICE
            }
        });

        console.log(gifs);
        setImages(gifs);
    }

    return (
        <>
        <h3>{category}</h3>       
        <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                        key={img.id}
                        {...img}
                        />
                    ))
                }     
        </div>
        </>
    )
}
