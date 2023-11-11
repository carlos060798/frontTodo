import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

function NabarAdmin() {
  const { handleCerrarSesion } = useLogin();
  return (
    <>
      <Navbar expand="lg" className="bg-primary mb-3">
        <Container>
        <Navbar.Brand className="fs-3 text-light fw-bold">
          <FontAwesomeIcon icon={faList} size="1x" className='mx-1' />TASKMANAGER
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton className='bg-primary'>
              <Offcanvas.Title id="offcanvasNavbarLabel" className="text-white fs-3 text-center"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='bg-primary'>
              <Nav className="d-flex flex-column flex-lg-row justify-content-lg-end align-items-center flex-grow-1 pe-3">
                <Nav.Link as={Link} to="taskmanager" className="text-white text-lg-center">Crear Tareas</Nav.Link>
                <Nav.Link as={Link} to="listtask" className="text-white text-lg-center">Listar Tareas</Nav.Link>
                <Nav.Link as={Link} to="perfil" className="text-white text-lg-center">Perfil</Nav.Link>
                <Nav.Link as={Button} onClick={handleCerrarSesion} className="btn text-light btn-danger fw-bolder px-2">Cerrar Sesión</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NabarAdmin;



/*
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

function NabarAdmin() {
  const{handleCerrarSesion}=useLogin();
  return(<>
<Navbar expand="lg" className="bg-white mb-3">
  <Container>
    <Navbar.Brand href="#" className="text-primary fw-bold fs-3">TASKMANAGER</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel" className="text-primary fs-3">TASKMANAGER</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="d-flex flex-column flex-lg-row justify-content-lg-end align-items-center flex-grow-1 pe-3">
          <Nav.Link as={Link} to="taskmanager" className="text-primary  text-lg-center">Crear Tareas</Nav.Link>
          <Nav.Link as={Link} to="listtask" className="text-primary  text-lg-center">Listar Tareas</Nav.Link>
          <Nav.Link as={Link} to="perfil" className="text-primary text-lg-center">Perfil</Nav.Link>
          <Nav.Link as={Button} onClick={handleCerrarSesion} className="btn btn-primary ">Cerrar Sesión</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
  </>
  )
}

export default NabarAdmin;
*/