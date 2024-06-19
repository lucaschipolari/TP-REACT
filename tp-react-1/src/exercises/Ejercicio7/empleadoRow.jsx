import React from 'react';
import PropTypes from 'prop-types';
import { EmpleadoAvatar } from './empleadoAvatar';
import { Card } from 'react-bootstrap'
import './styles.css'
const EmpleadoRow = (props) => {
    const {empleado,handleDelete} = props;

  return (
    <>
  <tr>
      <td>
        <Card className='d-flex flex-row custom-card'>
            <EmpleadoAvatar pic={empleado.pic} fullName={empleado.fullName} />
          <Card.Body>
            <div>
            <Card.Title>{empleado.fullName}</Card.Title>
            <div className='d-flex justify-content-start align-items-center gap-1'>
            <Card.Subtitle className="text-muted">{empleado.title}</Card.Subtitle>
            <Card.Text className='bg-primary border rounded p-1 text-light'>
              {empleado.department}
            </Card.Text>
            </div>
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