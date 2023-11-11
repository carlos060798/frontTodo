import { useState, useEffect } from "react";
import axios from "axios";

function UseTasks() {
  const [tasks, setTasks] = useState([]);
  const [Formtask, setFormTask] = useState({
    titulo: "",
    descripcion: "",
    usuario: "", // Asigna el ID del usuario aquí
  });
  const [alerta, setAlerta] = useState({});
  const usuarioid = localStorage.getItem("userId");


  useEffect(() => {
    if (usuarioid) {
      setFormTask((prevFormTask) => ({
        ...prevFormTask,
        usuario: usuarioid,
      }));
    }

    const getTasks = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const response = await axios.get(`https://apitodos-plrl.onrender.com/api/Tarea//usuario/${userId}`)
        setTasks(response.data.tasks);
      } catch (error) {
        console.error("Error al Crear Tarea:", error);
      }

    }
    getTasks();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormTask((prevFormTask) => ({
      ...prevFormTask,
      [name]: value,
    }));
  };

  const handleCreateTask = async (e) => {
    try {
      e.preventDefault();
      if ([Formtask.titulo, Formtask.descripcion].includes("")) {
        setAlerta({
          msg: "Todos los campos son obligatorios",
          error: true,
        });

        setTimeout(() => {
          setAlerta({});
        }, 3000)
        return;
      }
      const userId = localStorage.getItem('userId');
      console.log("userId", userId);
      const TareaResponse = await axios.post(`https://apitodos-plrl.onrender.com/api/tarea/${userId}`
        ,
        Formtask
      );
      const { data } = TareaResponse;

      setAlerta({
        msg: data.msg,
        error: false,
      });

      setTimeout(() => {
        setFormTask({
          titulo: "",
          descripcion: "",
          usuario: Formtask.usuario, // Mantén el ID del usuario
        });
        setAlerta({}); // Oculta la alerta
      }, 3000)




    } catch (error) {
      console.error("Error al Crear Tarea:", error);
      // Mostrar alerta de error
      setTimeout(() => {
        setAlerta({
          msg: error.response.data.msg,
          error: true,
        });
      }, 3000);
    }
  };

  const handleUpdateTask = (e) => {
    // Implementa la lógica para actualizar una tarea
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`https://apitodos-plrl.onrender.com/api/Tarea/${taskId}`);
      console.log("Tarea eliminada correctamente");
      // Aquí puedes realizar alguna acción adicional si lo deseas, como actualizar la lista de tareas en tu componente.
    } catch (error) {
      console.error("Error al eliminar la tarea:", error);
    }
  };

 

  const handleChangeState = async (taskId) => {
    try {
      await axios.patch(`https://apitodos-plrl.onrender.com/api/Tarea/${taskId}`);
      console.log("Tarea completa correctamente");
      // Aquí puedes realizar alguna acción adicional si lo deseas, como actualizar la lista de tareas en tu componente.
    } catch (error) {
      console.error("Error al completar la tarea:", error);
    }
  };


  return {
    tasks,
    Formtask,
    handleChange,
    handleCreateTask,
    handleUpdateTask,
    handleDeleteTask,
    handleChangeState,
    alerta,
  };
}

export default UseTasks;