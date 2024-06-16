import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/ejercicio6.css';

export const CardColor = () => {

  const handleDelete = () => {
    // Clear the color to simulate deletion
  };

  return (
    <div className='container'>
    <Card className='card-style'>
      <Card.Body>
        <Card.Title>hola</Card.Title>
        <div className='color'>

        </div>
        <Button className='btn btn-danger'  onClick={handleDelete}>
          Eliminar
        </Button>
      </Card.Body>
    </Card>
    </div>
  );
};
