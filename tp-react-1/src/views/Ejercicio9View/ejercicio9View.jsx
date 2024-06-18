import React, { useState,useEffect } from 'react'
import FormularioVet from '../../exercises/Ejercicio9/formularioVet'
import CardCita from '../../exercises/Ejercicio9/cardCita'
import ListaCitas from '../../exercises/Ejercicio9/listaCitas';

const citaLS = JSON.parse(localStorage.getItem('citas')) || [];

export const Ejercicio9View = () => {
  const [citas, setCitas] = useState(citaLS);
  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);
  return (
    <div>
        <FormularioVet citas={citas} setCitas={setCitas}/>
        <ListaCitas citas={citas} setCitas={setCitas}/>
    </div>
  )
}
