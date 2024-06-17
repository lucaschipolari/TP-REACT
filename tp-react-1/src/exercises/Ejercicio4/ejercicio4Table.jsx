import React from 'react'
import PropTypes  from 'prop-types';
import { Ejercicio4Row } from './ejercicio4Row';
export const Ejercicio4Table = (props) => {
    const {tasks,setTasks}=props;
    const handleDelete = (id) => {
       
        setTasks(tasks.filter((task) => task.id!==id));
    }
  return (
    <>
    <div className='container mt-4'>
    <div className='table-responsive'>
        <table className='table table-striped table-bordered table-hover'>
          <thead>
            <tr>
              <th>Index</th>
              <th>Task</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
                <Ejercicio4Row key={task.id} task={task} index={index} handleDelete={handleDelete} />
            ))}
          </tbody>
        </table>
      </div>
 </div> 
    </>
  )
}
Ejercicio4Table.protoTypes={
    tasks:PropTypes.string.isRequired,
    setTasks:PropTypes.func.isRequired,
}