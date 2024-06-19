import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkull } from '@fortawesome/free-solid-svg-icons';

export const NavbarMain = () => {
  return (
  <header>

    <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#home" className='mx-2'>
      <FontAwesomeIcon icon={faSkull} /> TP chipo
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="">
        <NavDropdown title="Listado de ejercicios" id="basic-nav-dropdown" className="text-white">
          <NavDropdown.Item href="/ejercicio1">Ejercicio 1</NavDropdown.Item>
          <NavDropdown.Item href="/ejercicio2">Ejercicio 2</NavDropdown.Item>
          <NavDropdown.Item href="/ejercicio3">Ejercicio 3</NavDropdown.Item>
          <NavDropdown.Item href="/ejercicio4">Ejercicio 4</NavDropdown.Item>
          <NavDropdown.Item href="/ejercicio6">Ejercicio 6</NavDropdown.Item>
          <NavDropdown.Item href="/ejercicio7">Ejercicio 7</NavDropdown.Item>
          <NavDropdown.Item href="/ejercicio8">Ejercicio 8</NavDropdown.Item>
          <NavDropdown.Item href="/ejercicio9">Ejercicio 9</NavDropdown.Item>
          <NavDropdown.Item href="/ejercicio10">Ejercicio 10</NavDropdown.Item>
          
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </header>
   
  )
}
