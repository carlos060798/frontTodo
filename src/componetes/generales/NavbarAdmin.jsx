import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList,faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function NabarAdmin() {
  const { handleCerrarSesion } = useLogin();
  return (
    <>
      <Navbar expand="lg" className="bg-dark mb-3">
        <Container>
          <Navbar.Brand className="fs-3 text-light fw-bold">
            <FontAwesomeIcon icon={faList} size="1x" className="mx-1" />
            TASKMANAGER
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton className="bg-dark">
              <Offcanvas.Title
                id="offcanvasNavbarLabel"
                className="text-white fs-3 text-center"
              ></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="bg-dark">
              <Nav className="d-flex flex-column flex-lg-row justify-content-lg-end align-items-center flex-grow-1 pe-3">
                <Nav.Link
                  as={Link}
                  to="taskmanager"
                  className="text-light text-lg-center"
                >
                  Tareas
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="listtask"
                  className="text-light text-lg-center"
                >
                  Estado
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="perfil"
                  className="text-light text-lg-center"
                >
                  Perfil
                </Nav.Link>
                <Nav.Link
                  as={Button}
                  onClick={handleCerrarSesion}
                  className="btn text-light btn-danger fw-bolder px-2"
                >
                  <FontAwesomeIcon icon={faSignOutAlt} className="me-1" />
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NabarAdmin;
