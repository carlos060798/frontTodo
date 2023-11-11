import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="mb-3">
      <Container>
        <Navbar.Brand className="fs-3 text-primary fw-bold">
          <FontAwesomeIcon icon={faList} size="1x" className='mx-1' />TASKMANAGER
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto text-center fw-light">
            <Link
              to="/inicio"
              className="nav-link text-primary"
            >
              Inicio
            </Link>
            <Link
              to="/about"
              className="nav-link text-primary"
            >
              Acerca de
            </Link>
          </Nav>
          <Nav className="d-flex align-items-center">
            <Button
              variant="link"
              as={Link}
              to="/login"
              className="text-decoration-none fs-md-4 fs-sm-3 fw-bolder text-primary btn btn-light"
            >
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;