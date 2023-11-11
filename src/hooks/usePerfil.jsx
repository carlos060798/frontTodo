import { useState } from 'react';
import axios from 'axios';

function usePerfil() {
  const [FormPerfil, setFormPerfil] = useState({
    nombre: '',
    password: '',
    email: '',
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
    try {
      e.preventDefault();

      // Validación: Al menos un campo debe estar lleno
      const alMenosUnCampoLleno = Object.values(FormPerfil).some((campo) => campo.trim() !== '');

      if (!alMenosUnCampoLleno) {
        setAlerta({
          msg: ' Al menos un campo debe estar lleno.',
          error: true,
        });
        setTimeout(() => {
          setAlerta({});
        }, 3000);
        return;
      }

      const usuarioId = localStorage.getItem('userId');

      const response = await axios.put(
        `https://apitodos-plrl.onrender.com/api/Usuario/${usuarioId}`,
        FormPerfil
      );

      setAlerta({
        msg: response.data.msg,
        error: false,
      });
      setTimeout(() => {
        setAlerta({});
      }, 3000);
    } catch (error) {
      console.error('Error al actualizar el perfil:', error);
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
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

