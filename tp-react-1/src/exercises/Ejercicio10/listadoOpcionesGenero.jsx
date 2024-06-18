import React from 'react'
import PropTypes from 'prop-types'
const ListadoOpcionesGenero = (props) => {
  const {generos}=props;
    return (
        <>
    {generos.map((genero) => <option key={genero.id}  value={genero.id}>{genero.nombre}</option>)}
        </>
  );
}

export default ListadoOpcionesGenero

ListadoOpcionesGenero.propTypes = {
    generos: PropTypes.object.isRequired,
  };
  
