import React, { useState,useEffect } from 'react'
import { Ejercicio4 } from '../../exercises/Ejercicio4/ejercicio4'
import { Ejercicio4Table } from '../../exercises/Ejercicio4/ejercicio4Table';

const tasksLS = JSON.parse(localStorage.getItem('tasks')) || [];
export const Ejercicio4view = () => {
    const [tasks, setTasks] = useState(tasksLS);
    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks])
    
  return (
    <>
    <Ejercicio4 tasks={tasks} setTasks={setTasks} />
    <Ejercicio4Table tasks={tasks} setTasks={setTasks}/>
    </>
  )
}
