import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";

function EditTaskForm({ taskId, onCancelEdit }) {
  const [taskData, setTaskData] = useState({
    titulo: "",
    descripcion: "",
  });

  useEffect(async() => {
    try {
    const response= await axios.get(`https://apitodos-plrl.onrender.com/api/Tarea/${taskId}`)   
     setTaskData(response.data.task);
    } catch (error) {
      console.error("Error al obtener la tarea:", error);
    }
     
  }, [taskId]);

  const handleUpdateTask = async () => {
    try {
      // Realiza una solicitud para actualizar la tarea con los nuevos datos
     const response= await axios.put(`https://apitodos-plrl.onrender.com/api/Tarea/${taskId}`, taskData);
      
      onCancelEdit();
    } catch (error) {
      console.error("Error al actualizar la tarea:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevTaskData) => ({
      ...prevTaskData,
      [name]: value,
    }));
  };

  return (
    <div
      className="container my-5 p-4 rounded"
      style={{
        background: "#343a40", // Fondo oscuro
        boxShadow: "0px 0px 10px 0px rgba(255,255,255,0.2)", // Sutil sombra con color claro
        color: "#fff", // Texto blanco para contraste
      }}
    >
      <h2 className="text-center fw-bold ">
        <FontAwesomeIcon icon={faEdit} className="me-2" /> Editar Tarea
      </h2>

      <form onSubmit={handleUpdateTask}>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">
            Título
          </label>
          <input
            type="text"
            className="form-control"
            name="titulo"
            value={taskData.titulo}
            onChange={handleChange}
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
            value={taskData.descripcion}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="d-flex justify-content-center gap-3">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ background: "#007bff", borderColor: "#007bff" }} // Fondo y borde azules
          >
            <FontAwesomeIcon icon={faEdit}  /> 
          </button>
          <button
            type="button"
            className="btn btn-secondary text-center"
            onClick={onCancelEdit}
          >
            <FontAwesomeIcon icon={faTimes}  /> 
          </button>
        </div>
      </form>
    </div>
  );

}

export default EditTaskForm;