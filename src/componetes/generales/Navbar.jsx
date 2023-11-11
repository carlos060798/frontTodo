import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mb-3">
    <Container>
      <Navbar.Brand className="fs-3 text-light fw-bold">
        <FontAwesomeIcon icon={faList} size="1x" className='mx-1' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto text-center fw-light">
          <Link to="/inicio" className="nav-link text-light fw-semibold">
            Inicio
          </Link>
        </Nav>
        <Nav className="d-flex align-items-center">
          <Button
            variant="link"
            as={Link}
            to="/login"
            className="text-decoration-none fs-md-4 fs-sm-3 fw-semibold text-light btn btn-outline-info"
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