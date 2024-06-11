import React from 'react'
import { useState } from 'react'
export const Ejercicio3 = ({msj}) => {
    const [mensaje, setMensaje] = useState('');
    
    const handleClick = () =>{
        setMensaje((prevMsj) => (prevMsj === '' ? '(from changed state)' : ''));
    };
return (
    <>
        <div>Hola {msj} {mensaje}</div>
        <button onClick={handleClick}>{mensaje === '' ? 'Mostrar Mensaje' : 'Ocultar Mensaje'}</button>
    </>

  )
}
