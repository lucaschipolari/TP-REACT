import React,{useState,useEffect} from 'react'
import FormularioPeli from '../../exercises/Ejercicio10/formularioPeli'
import ListadoPeliculas from '../../exercises/Ejercicio10/listadoPeliculas';

const peliculasLS = JSON.parse(localStorage.getItem('peliculas')) || [];

const Ejercicio10View = () => {
    const [peliculas, setPeliculas] = useState(peliculasLS);
    useEffect(() => {
        localStorage.setItem('peliculas', JSON.stringify(peliculas));
      }, [peliculas]);
    
  return (
    <div>
        <FormularioPeli peliculas={peliculas} setPeliculas={setPeliculas}/>
        <ListadoPeliculas peliculas={peliculas} setPeliculas={setPeliculas}/>
    </div>
  )
}

export default Ejercicio10View