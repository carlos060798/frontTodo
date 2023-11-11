import { Navigate, Route } from "react-router-dom";

function RutaPrivada({ element }) {
// Verificar si el token existe
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  // Verificar el token en el backend si es necesario

  // Si el token es válido, muestra el contenido de la ruta privada
  return element;
}

export default RutaPrivada;