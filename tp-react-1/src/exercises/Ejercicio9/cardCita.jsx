import React from 'react'
import {Card , Button} from 'react-bootstrap'
import PropTypes from 'prop-types'

const CardCita = (props) => {
    const {cita,setCitas} = props;
    const handleDelete = () => {
        setCitas((prevCitas) =>
            prevCitas.filter((prevCita) => prevCita.id !== color.id)
          );
    }
  return (
        <article className='col-12 col-md-4 col-lg-3 mb-2'>
      <Card>
      <Card.Body>
        <article>
        <div>
            <img src="" alt="" />
        </div>
        <div>
        <Card.Title>Mascota: {cita.mascota}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Dueño: {cita.dueño}</Card.Subtitle>
        </div>
        </article>
        <Card.Text className='d-flex flex-column'>
          <label>Fecha:</label>
          <input type="text" placeholder={cita.fecha} disabled/>
          <label>Hora:</label>
          <input type="text" placeholder={cita.hora} disabled/>
          <label>Sintomas:</label>
          <input type="text" placeholder={cita.sintomas} disabled/>
        </Card.Text>
        <Button onClick={handleDelete}>Eliminar</Button>
      </Card.Body>
    </Card>
        </article>
  )
}

export default CardCita

CardCita.propTypes = {
  cita: PropTypes.object.isRequired,
}
