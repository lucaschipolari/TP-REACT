import React from 'react'

const Ejercicio13View = () => {
    const [clima, setClima] = useState();

    const getClima = async () => {
        try{
            const result = await fetch('');
            const data = await result.json();
            setClima(data || []); 
        }catch(e){
            console.log('Error al obtener clima:', e);
        }
    }
    useEffect(() => {
        getClima();
    }, [clima])
  return (
    <div>

    </div>
  )
}

export default Ejercicio13View