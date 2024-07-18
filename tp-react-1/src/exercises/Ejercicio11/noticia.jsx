import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Noticia = (props) => {
  const { noticia } = props;

  return (
    <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
      <Card className="news-card">
        <img
          src={noticia.image_url || 'https://th.bing.com/th/id/OIP.K381jCrMxyg8axhL31G2iQHaFj?&rs=1&pid=ImgDetMain'}
          className='card-img-top'
          alt={noticia.title}
          onError={(e) => { e.target.src = 'https://th.bing.com/th/id/OIP.K381jCrMxyg8axhL31G2iQHaFj?&rs=1&pid=ImgDetMain'; }}
        />
        <Card.Body>
          <Card.Title>{noticia.title}</Card.Title>
          <Card.Text>{noticia.description}</Card.Text>
          <Link href={noticia.link} className='btn btn-primary' target="_blank">Leer más</Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Noticia;