import React from 'react'
import { useRef } from 'react';
import { validateApellido,validateDni,validateNombre,validateEmail } from './validators';

const Formulario = () => {

    const $inputNombre = useRef();
    const $inputApellido = useRef();
    const $inputEmail = useRef();
    const $inputDni = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!validateApellido($inputApellido.current) || !validateNombre($inputNombre.current) || !validateDni($inputDni.current) || !validateEmail($inputEmail.current)){
            alert('Ingresar los datos correctamente');
            return;
        }
        alert('Datos ingresados correctamente');
        
    }
  return (
    <form onSubmit={handleSubmit}>
        <div className='d-flex flex-column gap-2'>
        <div className="form-group">
                    <label>Nombre</label>
                    <input type='text' className="form-control" ref={$inputNombre} />
                    <div className="invalid-feedback">Nombre no válido.</div>
                </div>
                <div className="form-group">
                    <label>Apellido</label>
                    <input type='text' className="form-control" ref={$inputApellido} />
                    <div className="invalid-feedback">Apellido no válido.</div>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type='email' className="form-control" ref={$inputEmail} />
                    <div className="invalid-feedback">Email no válido.</div>
                </div>
                <div className="form-group">
                    <label>DNI</label>
                    <input type='text' className="form-control" ref={$inputDni} />
                    <div className="invalid-feedback">DNI no válido.</div>
                </div>
                <div className='mt-4 text-center'>
                    <button type='submit' className="btn btn-primary">Agregar</button>
                </div>
        </div>
    </form>
  )
}

export default Formulario;