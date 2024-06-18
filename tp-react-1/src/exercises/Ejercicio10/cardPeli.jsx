import React from 'react'

import PropTypes from 'prop-types'

import {Card , Button} from 'react-bootstrap'
import Swal from 'sweetalert2'

const CardPeli = (props) => {
    const {pelicula,borrarPeliculas} = props;
    const handleDelete = () => {
      Swal.fire(
        {
          title: 'Estas seguro?',
          html: `<p>Estas por eliminar la pelicula <b>${pelicula.nombre}</b> </p>`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: 'red',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, eliminar!',
          cancelButtonText:'No, conservar',
        }
      ).then((res) => {
        if(res.isConfirmed){
          borrarPeliculas(pelicula.id);
          Swal.fire({
            title: 'Eliminado!',
            text: 'La pelicula ha sido eliminada.',
            icon:'success',
            showConfirmButton: false,
            timer: 1500
          })
        }
      });
       
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
        <Card.Title>Pelicula: {pelicula.nombre}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Descripcion:</Card.Subtitle>
        </div>
        </article>
        <Card.Text className='d-flex flex-column'>
        <p>{pelicula.descripcion}</p>
        </Card.Text>
        <Button onClick={handleDelete}>Eliminar</Button>
      </Card.Body>
    </Card>
        </article>
  )
}

export default CardPeli

CardPeli.propTypes = {
  pelicula: PropTypes.object.isRequired,
  setPeliculas: PropTypes.func.isRequired,
  borrarPeliculas: PropTypes.func.isRequired,
}
