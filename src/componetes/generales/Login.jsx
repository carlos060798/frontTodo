import React from "react";
import useLogin from "../../hooks/useLogin";
import Alerta from "./Alertas";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faUser,  faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons"; // Usar el icono de inicio de sesión adecuado

function Section() {
  const {
    alerta,
    DataUser,
    handleChangeUser,
    handleSeccion,
  } = useLogin();

  return (
    <div className="container my-3">
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-4 text-center">
        
        <form
          className="p-4 p-md-5 border rounded-3 bg-dark text-light"
          onSubmit={handleSeccion}
        >
          <FontAwesomeIcon
            icon={faUser}
            className="fs-1 text-primary mb-3"
            size="4x"
          />
          <div className="mb-3">
            <label htmlFor="email" className="form-label ">
              Email
            </label>
            <input
              type="email"
              className="form-control bg-dark text-light"
              id="email"
              placeholder="Correo electrónico"
              name="email"
              value={DataUser.email}
              onChange={handleChangeUser}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control bg-dark text-light"
              id="password"
              placeholder="Contraseña"
              name="password"
              value={DataUser.password}
              onChange={handleChangeUser}
            />
          </div>
  
          <button className="w-100 btn btn-lg btn-info" type="submit">
            Ingresar
          </button>
          <hr className="my-4 bg-light" />
  
          <p className="mb-0">
            ¿No tienes una cuenta?{' '}
            <Link to="/registro" className="text-decoration-none text-info">
              Regístrate
            </Link>
          </p>
        </form>
        {alerta.msg && <Alerta alerta={alerta} />}
      </div>
    </div>
  </div>
  );
}

export default Section;






/*
import { Link } from "react-router-dom";

function  Section() {
    return ( 
    <>
           <div className="container my-5">
        <h1 className="text-center fw-bold  text-primary">lNICIO DE SECCION</h1>
        <div className="row justify-content-center">
          <div className="col-md-10 mx-auto col-lg-5">
            <form
              className="p-4 p-md-5 border rounded-3 bg-body-tertiary"
         
            >
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                  name="email"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                 
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
             <Link to="/user"> <button className="w-100 btn btn-lg btn-primary" >
            
                Login
              </button>
              </Link>
              <hr className="my-4" />

              <small className="text-body-secondary"></small>
            </form>
          </div>
        </div>
      </div>
     
    
    </> );
}

export default  Section;
*/