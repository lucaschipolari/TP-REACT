import React from 'react'
import PropTypes  from 'prop-types';
export const Ejercicio4Row = (props) => {
    const {task,index,handleDelete} = props;
     
  return (
    <>
    <tr>
      <td>{index + 1}</td>
      <td>{task.task}</td>
      <td><button onClick={() => handleDelete(task.id)}>Eliminar</button></td>
    </tr>
    </>

  )
}
Ejercicio4Row.propTypes = {
    task: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleDelete: PropTypes.func.isRequired,
  };