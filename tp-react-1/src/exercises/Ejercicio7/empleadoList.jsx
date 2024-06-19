import React from 'react'
import EmpleadoRow from './empleadoRow';

const EmpleadoList = () => {
    const empleadosList = [
        { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "https://th.bing.com/th/id/OIP.MruMdqmeGnZ6nrlmp5VcbgAAAA?rs=1&pid=ImgDetMain" },
        { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "https://1.bp.blogspot.com/-iQV_poOyuIE/VeBuCZ0AUHI/AAAAAAAABaI/Fmd6XXuvrnA/s1600/goku.png" },
        { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "https://1.bp.blogspot.com/-iQV_poOyuIE/VeBuCZ0AUHI/AAAAAAAABaI/Fmd6XXuvrnA/s1600/goku.png" },
        { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "https://1.bp.blogspot.com/-iQV_poOyuIE/VeBuCZ0AUHI/AAAAAAAABaI/Fmd6XXuvrnA/s1600/goku.png" },
        { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "https://1.bp.blogspot.com/-iQV_poOyuIE/VeBuCZ0AUHI/AAAAAAAABaI/Fmd6XXuvrnA/s1600/goku.png" },
        { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "https://1.bp.blogspot.com/-iQV_poOyuIE/VeBuCZ0AUHI/AAAAAAAABaI/Fmd6XXuvrnA/s1600/goku.png" },
        { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "https://1.bp.blogspot.com/-iQV_poOyuIE/VeBuCZ0AUHI/AAAAAAAABaI/Fmd6XXuvrnA/s1600/goku.png" },
        { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "https://1.bp.blogspot.com/-iQV_poOyuIE/VeBuCZ0AUHI/AAAAAAAABaI/Fmd6XXuvrnA/s1600/goku.png" },
        { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "https://1.bp.blogspot.com/-iQV_poOyuIE/VeBuCZ0AUHI/AAAAAAAABaI/Fmd6XXuvrnA/s1600/goku.png" },
      ];

    const handleDelete = (id) => {
      console.log(id);
    };
      
  return (
    <div className="container">

    <div className='d-flex justify-content-center flex-column align-items-center'>
        {empleadosList.map((empleado) => (
          <EmpleadoRow key={empleado.id} empleado={empleado} handleDelete={handleDelete} />
        ))}
    </div>
        </div>
  )
}

export default EmpleadoList