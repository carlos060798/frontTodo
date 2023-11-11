import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import UseTasks from '../../hooks/useTask';

function TableLists() {
  const { tasks } = UseTasks();
  const formatearFecha = (fecha) => {
    //  funcion para formatear la fecha
    const nuevaFecha = new Date(fecha); // crea un objeto de tipo fecha
    nuevaFecha.setMinutes(nuevaFecha.getMinutes() + nuevaFecha.getTimezoneOffset()); //ajusta la hora a la zona horaria
    return new Intl.DateTimeFormat("es-MX", { dateStyle: "long" }).format( nuevaFecha); // retorna la fecha formateada
  };

  return (
    <div className="container my-5">
      <div className="row">
      <p className="text-center mt-3 text-primary">
  <strong>¡Tienes un total de {tasks.length} tareas por gestionar!</strong>
</p>
        {tasks.map((task) => (
          <div className="col-12 col-md-6 col-lg-6 mb-4" key={task._id}>
            
            <Card className="h-100" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
              <Card.Body>
                <Card.Title className="text-center fw-bold mb-3">{task.titulo}</Card.Title>
                <Card.Text className="mb-2">Descripción: {task.descripcion}</Card.Text>
                <Card.Text className="mb-2">Fecha de Creación: {formatearFecha(task.fecha)}</Card.Text>
                <Card.Text className="mb-2">Estado: {task.complete}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TableLists;
