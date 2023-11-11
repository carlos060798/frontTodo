import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import UseTasks from '../../hooks/useTask';
import EditTaskForm from './FormTaksedit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

function TableList() {
  const { handleDeleteTask, tasks, handleChangeState } = UseTasks();
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [showPending, setShowPending] = useState(true); // Por defecto, mostrar pendientes

  const formatearFecha = (fecha) => {
    const nuevaFecha = new Date(fecha);
    nuevaFecha.setMinutes(nuevaFecha.getMinutes() + nuevaFecha.getTimezoneOffset());
    return new Intl.DateTimeFormat("es-MX", { dateStyle: "long" }).format(nuevaFecha);
  };

  const handleEditClick = (taskId) => {
    setEditingTaskId(taskId);
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null);
  };

  const handleShowPendingClick = () => {
    setShowPending(true);
  };

  const handleShowCompletedClick = () => {
    setShowPending(false);
  };

  // Filtrar tareas según el estado deseado (pendientes o completadas)
  const filteredTasks = showPending ? tasks.filter((task) => task.complete === "pendiente") : tasks.filter((task) => task.complete === "completada");

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <button
            className={`btn btn-danger mx-2 ${showPending ? 'active' : ''}`}
            onClick={handleShowPendingClick}
          >
            Mostrar Pendientes {tasks.filter((task) => task.complete === "pendiente").length}
          </button>
          <button
            className={`btn btn-success mx-2 ${!showPending ? 'active' : ''}`}
            onClick={handleShowCompletedClick}
          >
            Mostrar Completados { tasks.filter((task) => task.complete === "completada").length}
          </button>
        </div>
      </div>
      <div className="row">
        {editingTaskId && (
          <div className="col-12 col-lg-4">
            <EditTaskForm taskId={editingTaskId} onCancelEdit={handleCancelEdit} />
          </div>
        )}
        <div className="col-12 col-lg-8">
          <CardGroup className="justify-content-center">
            {filteredTasks.map((task) => (
              <div className="col-12 col-md-4" key={task._id}>
                <Card className={`mx-3 my-3 ${task.complete === 'completada' ? 'bg-success text-white' : 'bg-danger text-white'}`}>
                  <Card.Body>
                    <Card.Title className="text-center">{task.titulo}</Card.Title>
                    <Card.Text>Descripción: {task.descripcion}</Card.Text>
                    <Card.Text>Fecha de Creación: {formatearFecha(task.fecha)}</Card.Text>
                    <Card.Text>Estado: {task.complete === 'completada' ? 'completada' : 'pendiente'}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-center bg-light">
                    <button className="btn btn-primary mx-2" onClick={() => handleEditClick(task._id)}>
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="btn btn-danger mx-2" onClick={() => handleDeleteTask(task._id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button className="btn btn-success" onClick={() => handleChangeState(task._id)}>
                      <FontAwesomeIcon icon={faCheck} />
                    </button>
                  </Card.Footer>
                </Card>
              </div>
            ))}
          </CardGroup>
        </div>
     
      </div>
    </div>
  );
}

export default TableList;









/*import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import UseTasks from '../../hooks/useTask';
import EditTaskForm from './FormTaksedit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

function TableList() {
  const { handleDeleteTask, tasks, handleChangeState } = UseTasks();
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [showPending, setShowPending] = useState(true); // Por defecto, mostrar pendientes

  const formatearFecha = (fecha) => {
    const nuevaFecha = new Date(fecha);
    nuevaFecha.setMinutes(nuevaFecha.getMinutes() + nuevaFecha.getTimezoneOffset());
    return new Intl.DateTimeFormat("es-MX", { dateStyle: "long" }).format(nuevaFecha);
  };

  const handleEditClick = (taskId) => {
    setEditingTaskId(taskId);
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null);
  };

  const handleShowPendingClick = () => {
    setShowPending(true);
  };

  const handleShowCompletedClick = () => {
    setShowPending(false);
  };

  // Filtrar tareas según el estado deseado (pendientes o completadas)
  const filteredTasks = showPending ? tasks.filter((task) => task.complete === "pendiente") : tasks.filter((task) => task.complete === "completada");

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <button
            className={`btn btn-danger mx-2 ${showPending ? 'active' : ''}`}
            onClick={handleShowPendingClick}
          >
            Mostrar Pendientes {tasks.filter((task) => task.complete === "pendiente").length}
          </button>
          <button
            className={`btn btn-success mx-2 ${!showPending ? 'active' : ''}`}
            onClick={handleShowCompletedClick}
          >
            Mostrar Completados { tasks.filter((task) => task.complete === "completada").length}
          </button>
        </div>
      </div>
      <div className="row">
        {editingTaskId && (
          <div className="col-12 col-lg-4">
            <EditTaskForm taskId={editingTaskId} onCancelEdit={handleCancelEdit} />
          </div>
        )}
        <div className="col-12 col-lg-8">
          <CardGroup className="justify-content-center">
            {filteredTasks.map((task) => (
              <div className="col-12 col-md-4" key={task._id}>
                <Card className={`mx-3 my-3 ${task.complete === 'completada' ? 'bg-success text-white' : 'bg-danger text-white'}`}>
                  <Card.Body>
                    <Card.Title className="text-center">{task.titulo}</Card.Title>
                    <Card.Text>Descripción: {task.descripcion}</Card.Text>
                    <Card.Text>Fecha de Creación: {formatearFecha(task.fecha)}</Card.Text>
                    <Card.Text>Estado: {task.complete === 'completada' ? 'completada' : 'pendiente'}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-center bg-light">
                    <button className="btn btn-primary mx-2" onClick={() => handleEditClick(task._id)}>
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="btn btn-danger mx-2" onClick={() => handleDeleteTask(task._id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button className="btn btn-success" onClick={() => handleChangeState(task._id)}>
                      <FontAwesomeIcon icon={faCheck} />
                    </button>
                  </Card.Footer>
                </Card>
              </div>
            ))}
          </CardGroup>
        </div>
      </div>
    </div>
  );
}

export default TableList; */
