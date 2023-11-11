import React from 'react';
import { Link } from 'react-router-dom';
import {  Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';


function Nosotros() {
  return (
    <>
        <>
      <div className="mt-5">
      <div className="mt-5">
      <div className="bg-primary text-white text-center py-5 mt-3rem">
        <h1 className="text-xl fw-bolder"> <FontAwesomeIcon icon={faList} size="1x" className='mx-1' />TASMANAGER</h1>
        <p className="text-xl mt-4">Mantente organizado y productivo</p>
        <Link to="/Registro" className="mt-4">
          <Button variant="light" className="mt-4">Empezar</Button>
        </Link>
      </div>
    </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <h2 className="text-2xl font-bold">Acerca del Gestor de Tareas</h2>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ligula ut turpis auctor scelerisque. Nulla
              facilisi. In eget arcu id ligula posuere bibendum. Aliquam ut vulputate lacus.
            </p>
            <p className="mt-4">
              Phasellus quis lectus in massa fermentum pharetra. In nec arcu eu felis consectetur fringilla. Duis eu
              massa consectetur, viverra ipsum vitae, dapibus lorem. Donec pharetra rhoncus metus non vestibulum.
            </p>
          </div>

          <div className="col-md-4">
            <h2 className="text-2xl font-bold">Características Clave</h2>
            <hr className="mt-4" />
            <ul className="mt-4 list-unstyled">
              <li>Creación y gestión de tareas</li>
              <li>Configuración de prioridad y fecha de vencimiento</li>
              <li>Asignación de tareas a miembros del equipo</li>
              <li>Actualizaciones y notificaciones en tiempo real</li>
              <li>Seguimiento de progreso e informes</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-primary text-white text-center py-3">
      <h3 className="text-xl fw-bolder"> <FontAwesomeIcon icon={faList} size="1x" className='mx-1' />TASMANAGER</h3>
        <p className="font-semibold text-2xl">Gestor de Tareas © 2023</p>
      </div>
    </div>
    </>
  
 </>
  );
}

export default Nosotros;