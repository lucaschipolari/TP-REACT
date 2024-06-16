import React, {useState, useEffect} from 'react'
import { FormColor } from '../../exercises/Ejercicio6/ejercicio6FormColor'
import { CardColor } from '../../exercises/Ejercicio6/ejercicio6CardColor'

const colorLS = JSON.parse(localStorage.getItem('color')) || [];

export const Ejercicio6View = () => {
    const [colores, setColores] = useState(colorLS);

    useEffect(() => {
      localStorage.setItem('color', JSON.stringify(colores));
    }, [colores])

  return (
    <>
        <FormColor colores={colores} setColores={setColores}/>
        <CardColor/>
    
    </>
  )
}
