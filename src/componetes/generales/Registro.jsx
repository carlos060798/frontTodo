import React from "react";
import useRegistrarUser from "../../hooks/UseRegistro";
import Alerta from "./Alertas";

function RegistroUser() {
  const {
    handleChange,
    handleRegistro,
    formData,
    alerta,
  } = useRegistrarUser();

 return (
    <div className="container my-3">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-4 text-center">
          <form
            className="p-4 p-md-5 border rounded-3 bg-dark text-light"
            onSubmit={handleRegistro}
          >
            <h1 className="fs-3 text-ligth mb-3 fw-bold">Registrarse</h1>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombres
              </label>
              <input
                type="text"
                className="form-control bg-dark text-light"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Correo
              </label>
              <input
                type="email"
                className="form-control bg-dark text-light"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control bg-dark text-light"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-info">
                Registrarse
              </button>
            </div>
          </form>
          {alerta.msg && <Alerta alerta={alerta} />}
        </div>
      </div>
    </div>
  ); 
}

export default RegistroUser;