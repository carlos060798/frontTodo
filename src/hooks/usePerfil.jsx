import { useState } from "react";
import axios from "axios";

function usePerfil() {
  const [FormPerfil, setFormPerfil] = useState({
    nombre: "",
    password: "",
    email: "",
  });
  const [alerta, setAlerta] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormPerfil((prevFormPerfil) => ({
      ...prevFormPerfil,
      [name]: value,
    }));
  };

  const handleChangePerfil = async (e) => {
    e.preventDefault();
    const usuarioId = localStorage.getItem("userId");

    // Validar que no falten campos
    if ([FormPerfil.nombre, FormPerfil.email].includes("")) {
      setAlerta({
        msg: "Los campos de nombre y email son obligatorios",
        error: true,
      });
      return;
    }

    try {
      // Llamar a la API para actualizar el perfil
      const response = await axios.put(
        `http://localhost:4000/api/Usuario/${usuarioId}`,
        FormPerfil
      );

      // Mostrar respuesta en la consola
      console.log(response);
 
      // Puedes manejar la respuesta aquí según tus necesidades
        // Mostrar alerta de éxito
        setAlerta({
            msg: response.data.msg,
            error: false,
        });

      // Limpiar formulario y ocultar la alerta después de 3 segundos
      setTimeout(() => {
        setAlerta({});
      }, 3000);
    } catch (error) {
      console.error("Error al actualizar el perfil:", error);
      // Mostrar alerta de error
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });

      // Limpia la alerta después de 3 segundos
      setTimeout(() => {
        setAlerta({});
      }, 3000);
    }
  };

  return {
    handleChangePerfil,
    FormPerfil,
    handleChange,
    alerta,
  };
}

export default usePerfil;