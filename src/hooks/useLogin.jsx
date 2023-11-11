import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function useLogin() {
  const [DataUser, setDataUser] = useState({
    email: "",
    password: "",
  });

  const redireccion = useNavigate();
  const [usuarioid, setUsuarioid] = useState(null);
  const [alerta, setAlerta] = useState({});

  useEffect(() => {
    // Utiliza el valor de usuarioid cuando cambie
    console.log("usuarioid actualizado:", usuarioid);
  }, [usuarioid]); // Esto ejecutará el efecto cuando usuarioid cambie

  const handleChangeUser = (e) => {
    const { name, value } = e.target;
    setDataUser((prevDataUser) => ({
      ...prevDataUser,
      [name]: value,
    }));
  };

  const obtenerYAlmacenarUid = (uid) => {
    // Almacena el "uid" en el localStorage
    localStorage.setItem("userId", uid);
  };

  const handleSeccion = async (e) => {
    e.preventDefault();
    if ([DataUser.email, DataUser.password].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    try {
      const usuarioResponse = await axios.post(
        "http://localhost:4000/api/Usuario/login",
        DataUser
      );
      const { data } = usuarioResponse;

      // Llama a la función para obtener y almacenar el "uid" en localStorage
      obtenerYAlmacenarUid(data.id);

      localStorage.setItem("token", data.token);
      // Autenticación exitosa
      console.log("AUTENTICACION CORRECTA");
      setAlerta({
        msg: data.msg,
        error: false,
      });

      // Redirigir después de 5 segundos
      setTimeout(() => {
        redireccion("/user");
      }, 5000);
      
    } catch (error) {
      console.error("ERROR DE AUTENTICACION:", error);

      // Mostrar alerta de error
      setTimeout(() => {
        setAlerta({
          msg: error.response.data.msg,
          error: true,
        });
      }, 3000);
    }
  };

  const handleCerrarSesion = () => {
    // Eliminar el token del almacenamiento local
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  
    // Redirigir al usuario a la página de inicio de sesión u otra página deseada
    redireccion("/login");
  };

  return {
    alerta,
    DataUser,
    handleChangeUser,
    handleSeccion,
    handleCerrarSesion,
    usuarioid
  };
}

export default useLogin;
