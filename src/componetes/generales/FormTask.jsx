import React from "react";
import UseTasks from "../../hooks/useTask";
import Alerta from "./Alertas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks } from "@fortawesome/free-solid-svg-icons"; // Importa el ícono de tarea

function FormTask() {
  const { Formtask, handleChange, handleCreateTask, alerta } = UseTasks();

  return (
    <>
      <div
        className="container my-5 p-4 rounded"
        style={{
          background: "#343a40", // Fondo oscuro
          boxShadow: "0px 0px 10px 0px rgba(255,255,255,0.2)", // Sutil sombra con color claro
          color: "#fff", // Texto blanco para contraste
        }}
      >
        <h1 className="text-center fw-bold text-ligth mb-4">
          <FontAwesomeIcon icon={faTasks} className="me-2" /> Crear Tareas
        </h1>
        <form onSubmit={handleCreateTask}>
          <div className="row">
            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="titulo" className="form-label">
                  Título
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="titulo"
                  value={Formtask.titulo}
                  onChange={handleChange}
                  style={{ background: "#454d55", color: "#fff" }} // Fondo oscuro con texto blanco
                />
              </div>

              <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">
                  Descripción de la tarea
                </label>
                <textarea
                  className="form-control"
                  name="descripcion"
                  rows="3"
                  value={Formtask.descripcion}
                  onChange={handleChange}
                  style={{ background: "#454d55", color: "#fff" }} // Fondo oscuro con texto blanco
                ></textarea>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary"
              style={{ background: "#007bff", borderColor: "#007bff" }} // Fondo y borde azules
            >
              <FontAwesomeIcon icon={faTasks} className="me-2" /> Crear Tarea
            </button>
          </div>
        </form>
        {alerta.msg && <Alerta alerta={alerta} />}
      </div>
    </>
  );
}

export default FormTask;
