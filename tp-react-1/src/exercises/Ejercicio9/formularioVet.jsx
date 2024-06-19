import React from 'react'
import { useRef } from 'react';
import { Cita } from './cita';
import PropTypes from 'prop-types';
import {validateFecha,validateHora,validateMascota,validateNombre,validateSintomas} from './validators';

const FormularioVet = (props) => {
    const {citas,setCitas} = props;
    
    const $inputMascota = useRef();
    const $inputNombre = useRef();
    const $inputFecha = useRef();
    const $inputHora = useRef();
    const $inputSintomas = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if ( !validateMascota($inputMascota.current) || !validateNombre($inputNombre.current) || !validateFecha($inputFecha.current) || !validateHora($inputHora.current) || !validateSintomas($inputSintomas.current) ){
            return;
        }
        const mascota = $inputMascota.current.value;
        const nombre = $inputNombre.current.value;
        const fecha = $inputFecha.current.value;
        const hora = $inputHora.current.value;
        const sintomas = $inputSintomas.current.value;
        const nuevaCita = new Cita(fecha, hora, mascota, nombre, sintomas);

        const listaCitas = [...citas, nuevaCita];

        setCitas(listaCitas);
       
        e.target.reset();

        
    };
  return (
    
    <div className='container my-5' >
        <form onSubmit={handleSubmit} className='d-flex justify-content-center'>
        <div className='d-flex flex-column gap-2 w-50'>
        <div className="form-group">
                    <label>Nombre de mascota:</label>
                    <input type='text' className="form-control" ref={$inputMascota} />
                    <div className="invalid-feedback">Nombre de Mascota no válido.</div>
                </div>
                <div className="form-group">
                    <label>Nombre de dueño:</label>
                    <input type='text' className="form-control" ref={$inputNombre} />
                    <div className="invalid-feedback">Apellido no válido.</div>
                </div>
                <div className='row gap-3'>
                <div className="form-group col-12">
                    <label>Fecha:</label>
                    <input type='date' className="form-control" ref={$inputFecha} />
                    <div className="invalid-feedback">Fecha no válida.</div>
                </div>
                <div className="form-group col-12">
                    <label>Hora:</label>
                    <input type='time' className="form-control" ref={$inputHora} />
                    <div className="invalid-feedback">Hora no válida.</div>
                </div>
            
                </div>
                <div className="form-group">
                    <label>Sintomas:</label>
                    <input type='text' className="form-control" ref={$inputSintomas} />
                    <div className="invalid-feedback">Sintamos no válido.</div>
                </div>
                <div className='mt-4 text-center'>
                    <button type='submit' className="btn btn-primary">Agregar</button>
                </div>
        </div>
        </form>

    </div>
  )
}

export default FormularioVet

FormularioVet.propTypes = {
    citas: PropTypes.array.isRequired,
    setCitas: PropTypes.func.isRequired,
};