import React from 'react'
import CardPeli from './cardPeli';

const ListadoPeliculas = (props) => {
    const {peliculas,setPeliculas} = props;
    const borrarPeliculas = (idPelicula) => {
      const nuevaListaPeliculas = peliculas.filter((p)=> p.id === idPelicula)
      setPeliculas(nuevaListaPeliculas);
    };
  return (
      <div className='container'>
        <section className='row my-3'>
        {peliculas.map((pelicula) => <CardPeli key={pelicula.id} pelicula={pelicula} borrarPeliculas={borrarPeliculas}/>)}
    </section>
    </div>
  )
}

export default ListadoPeliculas