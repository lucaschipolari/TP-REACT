import React from "react";
import { useState,useRef } from "react";
import { Task } from "./task";
import { validateTask } from "./validators";
import PropTypes  from "prop-types";
import './styles/ejercicio4.css';

export const Ejercicio4 = (props) => {
  const {tasks, setTasks} = props;

  const $inputTask = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    //1-validamos inputs
    if (!validateTask($inputTask.current)) {
      return;
    }
    //2-capturamnos el valor
    const taskValue = $inputTask.current.value;
   //3-instanciamos la clase task y le asignamos el valor capturado
    const nuevoTask = new Task(taskValue);
   //4-agregamos el valor a la lista de valores
    const nuevaListaTask = [...tasks, nuevoTask];
    //5-guardamos el valor de la lista actualizada 
    setTasks(nuevaListaTask);
    //6-limpiamos el valor del input 
    e.target.reset();


  };
  return (
    <>
      <div>Bienvenido!</div>
      <div>Ingresa tus tareas</div>
      <form className="d-flex justify-content-center aling-items-center gap-1" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tareas.."
          ref={$inputTask}
        />
        <button className="btn btn-danger" type="submit">Agregar</button>
      </form>
    </>
  );
};

Ejercicio4.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
};