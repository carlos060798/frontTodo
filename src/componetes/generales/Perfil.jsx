import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSync } from "@fortawesome/free-solid-svg-icons";
import usePerfil from "../../hooks/usePerfil";
import Alerta from "./Alertas";

function Perfils() {
  const {
    handleChangePerfil,
    FormPerfil,
    handleChange,
    alerta,
  } = usePerfil();

  return (
    <>
      <div
        className="container my-5 p-4 rounded"
        style={{
          background: "#f8f9fa", // Fondo gris claro
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)", // Sutil sombra
        }}
      >
        <h1 className="text-center fw-bold text-primary">
          <FontAwesomeIcon icon={faUser} className="me-2" /> Perfil
        </h1>
        <form onSubmit={handleChangePerfil}>
          <div className="row justify-content-center">
            <div className="col-12 col-md-6">
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
            </div>
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
        </form>
        {alerta.msg && <Alerta alerta={alerta} />}
      </div>
    </>
  );
}

export default Perfils;











/*import usePerfil from "../../hooks/usePerfil";
import Alerta from "./Alertas";

function Perfils() {
  const { 
    handleChangePerfil,
    FormPerfil,
    handleChange,
    alerta

    } = usePerfil();
    return ( 
    
    
    <>
     <div className="container my-5">
        <h1 className="text-center fw-bold text-center text-primary">Actualizar Datos</h1>
        <form onClick={handleChangePerfil}>
          <div className="row justify-content-center">
            <div className="col-12 col-md-6">
              <div className="mb-3">
            
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
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
               Actualizar 
            </button>
          </div>
          </div>
        </form>
        {alerta.msg && <Alerta alerta={alerta} />}
      </div>
    
    </> );
}

export default Perfils; */