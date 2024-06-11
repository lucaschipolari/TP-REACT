import React from "react";
import { useState } from "react";
export const Ejercicio4 = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  const handleClick = () => {};
  return (
    <>
      <div>Bienvenidos</div>
      <div>Ingresa tus tareas</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tareas.."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => removeTask(index)}>✖</button>
          </li>
        ))}
      </ul>
    </>
  );
};
