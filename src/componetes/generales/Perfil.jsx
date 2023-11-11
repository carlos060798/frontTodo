import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSync } from "@fortawesome/free-solid-svg-icons";
import usePerfil from "../../hooks/usePerfil";
import Alerta from "./Alertas";

function Perfils() {
  const { handleChangePerfil, FormPerfil, handleChange, alerta } = usePerfil();

  return (
    <div className="container my-5 p-4 rounded">
      <h1 className="text-center fw-bold text-light">
        <FontAwesomeIcon icon={faUser} className="me-2" /> Perfil
      </h1>
      <form onSubmit={handleChangePerfil}>
        <div className="row justify-content-center">
          <div
            className="col-12 col-md-4 "
            style={{
              background: "#343a40", // Fondo gris oscuro
              boxShadow: "0px 4px 8px rgba(0,0,0,0.2)", // Sombra más pronunciada
              color: "#fff",
              borderRadius: "10px", // Añadí borde redondeado para mejorar el aspecto
            }}
          >
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombres
              </label>
              <input
                type="text"
                className="form-control"
                name="nombre"
                value={FormPerfil.nombre}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="correo" className="form-label">
                Correo
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={FormPerfil.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nombres" className="form-label">
                Nueva contraseña
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={FormPerfil.password}
                onChange={handleChange}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary"
                style={{ background: "#007bff", borderColor: "#007bff" }} // Fondo y borde azules
              >
                <FontAwesomeIcon icon={faSync} className="me-2" /> Actualizar
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="row justify-content-center">
        <div className="col col-md-4 d-flex align-items-center text-center">
          {alerta.msg && <Alerta alerta={alerta} />}
        </div>
      </div>
    </div>
  );
}

export default Perfils;
