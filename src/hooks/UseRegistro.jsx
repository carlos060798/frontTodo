import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
function useRegistrarUser() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
  });
  const redireccion = useNavigate();

  const [alerta, setAlerta] = useState({}); // Estado para mostrar la alerta

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleRegistro = async (e) => {
    e.preventDefault();
  
    // Validar que no falten campos
    if ([formData.nombre, formData.email, formData.password].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }
    console.log(formData);
  
    try {
      // 1. Llamar a la API para crear el usuario
      const usuarioResponse = await axios.post(
        "http://localhost:4000/api/Usuario",
        formData
      );
      const { data } = usuarioResponse;
      // Mostrar alerta de éxito
      setAlerta({
        msg: data.msg,
        error: false,
      });
      // Limpiar formulario y redirigir después de 10 segundos
      setTimeout(() => {
        setFormData({
          nombre: "",
          email: "",
          password: "",
        });
        redireccion("/login");
      }, 5000); // 10000 milisegundos (10 segundos)
    } catch (error) {
      console.error("Error al Registrarse:", error);
      // Mostrar alerta de error
      setTimeout(() => {
        setAlerta({
          msg: error.response.data.msg,
          error: true,
        });
      }, 3000);
    }
  };

  return {
    handleChange,
    handleRegistro,
    formData,
    alerta,
  };
}

export default useRegistrarUser;
