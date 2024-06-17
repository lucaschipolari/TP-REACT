import React from 'react';
import PropTypes from 'prop-types';
import { EmpleadoAvatar } from './empleadoAvatar';
import { Card } from 'react-bootstrap'
const EmpleadoRow = (props) => {
    const {empleado,handleDelete} = props;

  return (
    <>
  <tr>
      <td>
        <Card className='d-flex flex-row'>
            <EmpleadoAvatar pic={empleado.pic} fullName={empleado.fullName} />
          <Card.Body>
            <div>
            <Card.Title>{empleado.fullName}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{empleado.title}</Card.Subtitle>
            </div>
          </Card.Body>
        </Card>
      </td>
    </tr>
    </>
  )
}

export default EmpleadoRow;
EmpleadoRow.propTypes = {
    empleado: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
  };