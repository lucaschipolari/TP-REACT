import React from 'react'
import PropTypes from 'prop-types';
import './styles.css';
export const EmpleadoAvatar = (props) => {
    const {pic,fullName} = props;
  return (
    <div >
        <img src={pic} alt={fullName}  className='img-empleado'/>
    </div>
  )
}
EmpleadoAvatar.propTypes = {
  pic: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
};