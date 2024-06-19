import React from 'react'
import CardCita from './cardCita'
const ListaCitas = (props) => {
    const { citas, setCitas } = props;
  return (
    <div className='container my-5'> 
    <section className='row mt-3'>
    {citas.map((cita) => (
        <CardCita key={cita.id} cita={cita} setCitas={setCitas} />
        
    ))}
  </section>
    </div>
  )
}

export default ListaCitas