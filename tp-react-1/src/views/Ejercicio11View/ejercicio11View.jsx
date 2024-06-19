import React, { useState, useEffect } from 'react';
import ListadoNoticias from '../../exercises/Ejercicio11/listadoNoticias';

export const Ejercicio11View = () => {
    const [noticias, setNoticias] = useState([]);
    
    const fetchNoticias = async () => {
        try {
            const response = await fetch('https://newsdata.io/api/1/news?apikey=pub_46721e1bca4719ea529550c1d19bc0d619cf8&q=notices');
            const data = await response.json();
            // Assuming the actual news articles are in `data.results` or similar
            setNoticias(data.results || []); // Update this based on actual API response structure
            console.log(data);
        } catch (error) {
            console.log('error', error);
        }
    };

    useEffect(() => {
        fetchNoticias();
    }, []);

    return (
        <div>
            {noticias.length === 0 ? <h1>Cargando</h1> : <ListadoNoticias noticias={noticias} setNoticias={setNoticias} />}
        </div>
    );
};