import React,{useRef} from 'react'

import ListadoOpcionesGenero from './listadoOpcionesGenero';

import { generarListaGeneros } from './utilities';
import { validateNombre,validateDescripcion } from './validators';
import { Pelicula } from './pelicula';


const FormularioPeli = (props) => {
    const {peliculas,setPeliculas}=props;
    const listadoGeneros = generarListaGeneros();
    const $inputNombre = useRef();
    const $inputDescripcion = useRef();
    const $inputGenero = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!validateNombre($inputNombre.current) || !validateDescripcion($inputDescripcion.current) ){
        return;
    }
    const nombre= $inputNombre.current.value;
    const descripcion = $inputDescripcion.current.value;
    const genero = $inputGenero.current.value;

    const nuevaPelicula = new Pelicula(nombre,descripcion,genero);

    const listaPeliculas = [...peliculas,nuevaPelicula]

    setPeliculas(listaPeliculas);

    e.target.reset();

  }
    return (
        <div className='container my-5' >
        <form onSubmit={handleSubmit} className='d-flex justify-content-center'>
        <div className='d-flex flex-column gap-2 w-50'>
        <div className="form-group">
                    <label>Nombre:</label>
                    <input type='text' className="form-control" ref={$inputNombre} />
                    <div className="invalid-feedback">Nombre de Película no válida.</div>
                </div>
                <div className="form-group">
                    <label>Descripción:</label>
                    <textarea type='' className="form-control" ref={$inputDescripcion}></textarea>
                    <div className="invalid-feedback">Descripción no válida.</div>
                </div>
                <div className='form-group'>
                    <label>Género</label>
                    <select className="form-select" ref={$inputGenero}>
                        <ListadoOpcionesGenero generos={listadoGeneros}/>
                    </select>
                </div>
              
                <div className='mt-4 text-center'>
                    <button type='submit' className="btn btn-primary">Agregar</button>
                </div>
        </div>
        </form>

    </div>
  )
}

export default FormularioPeli