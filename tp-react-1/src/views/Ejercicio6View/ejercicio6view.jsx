import { useEffect, useState } from 'react';
import ColorList from '../../exercises/Ejercicio6/ColorList';
import ColorForm from '../../exercises/Ejercicio6/ColorForm';



const colorsLS = JSON.parse(localStorage.getItem('colors')) || [];

const Ejercicio6View = () => {
  const [colors, setColors] = useState(colorsLS);

  // Ejecutar cada vez que cambie colors
  useEffect(() => {
    localStorage.setItem('colors', JSON.stringify(colors));
  }, [colors]);

  return (
    <div className='w-100'>
      <ColorForm setColors={setColors} />
      <ColorList colors={colors} setColors={setColors} />
    </div>
  );
};
export default Ejercicio6View;