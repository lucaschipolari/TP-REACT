import { useState } from 'react'
import { Ejercicio1 } from '../components/ejercicio1'
import './App.css'
import { Ejercicio2 } from '../components/ejercicio2'
import { Ejercicio3 } from '../components/ejercicio3'

function App() {

  return (
    <>
    {/* <Ejercicio1/> */}
    {/* <Ejercicio2 mensaje='My Friend'/> */}
    <Ejercicio3 msj='My Friend' />
    </>
  )
}

export default App
