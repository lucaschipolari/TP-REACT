import React from "react";
import Noticia from "./noticia";
import PropTypes from "prop-types";
import './noticia.css'; 
const ListadoNoticias = (props) => {
  const { noticias } = props;
  return (
    <div className="container">
      <section className="row my-3">
        {noticias.map((noticia) => (
          <Noticia key={noticia.id} noticia={noticia} />
        ))}
      </section>
    </div>
  );
};

ListadoNoticias.propTypes = {
  noticias: PropTypes.arrayOf(PropTypes.object).isRequired,
  setNoticias: PropTypes.func.isRequired,
};

export default ListadoNoticias;