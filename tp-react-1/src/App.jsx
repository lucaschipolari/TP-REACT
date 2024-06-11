import { useState } from 'react'
import { Ejercicio1 } from '../components/ejercicio1'
import './App.css'
import { Ejercicio2 } from '../components/ejercicio2'

function App() {

  return (
    <>
    <Ejercicio1/>
    <Ejercicio2 mensaje='My Friend'/>
    </>
  )
}

export default App
