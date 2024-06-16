import React, { useRef } from "react";
import PropTypes from 'prop-types';
import {Color} from './color';
import { validateColor } from "./validartorsColors";
export const FormColor = (props) => {
  const {colores, setColores} = props;

  const $inputColor = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateColor($inputColor.current)) {
      return;
    }

    const color = $inputColor.current.value;
    const nuevoColor = new Color(color);


    const nuevaListaColor = [...colores, nuevoColor];

    setColores(nuevaListaColor);

    e.target.reset();


  };
  return (
    <>
      <div className="container">
        <h1>Administrador de colores</h1>
        <form onSubmit={handleSubmit}>
          <input className="" type="text" ref={$inputColor} placeholder="blue..." />
          <button type="submit">Crear</button>
        </form>
      </div>
    </>
  );
};

FormColor.propTypes = {
  colores: PropTypes.array.isRequired,
  setColores: PropTypes.func.isRequired
}